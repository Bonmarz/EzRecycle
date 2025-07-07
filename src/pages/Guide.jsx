import { useState } from 'react';
import GeminiRecyclingService from '../components/GeminiRecyclingService';

/**
 * Guide.jsx – Item Recycling Guide with Google Maps integration
 * -------------------------------------------------------------
 * Adds a "Nearby Recycling Centers" map powered by the Google Maps Embed API.
 * Requirements:
 *   1. Install an environment variable named `REACT_APP_GOOGLE_MAPS_API_KEY` (or update the key in MapSection).
 *   2. Ensure the Google Maps Embed API is enabled for that key in the Google Cloud Console.
 *   3. The user types a city / ZIP in the "Your location" field (Step 4), and the map renders below the results.
 */

/*********************
 * MapSection helper *
 *********************/
const MapSection = ({ location }) => {
  if (!location) return null;

  // Build the URL for Google Maps Embed API – searching for nearby recycling centers
  const mapSrc = `https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=recycling+center+near+${encodeURIComponent(
    location
  )}`;

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">🗺️</span>
        <h2 className="text-2xl font-bold text-green-700">Nearby Recycling Centers</h2>
      </div>
      <iframe
        title="Nearby recycling centers map"
        src={mapSrc}
        width="100%"
        height="400"
        loading="lazy"
        allowFullScreen
        className="w-full rounded-lg border-none"
      ></iframe>
    </div>
  );
};

export default function Guide() {
  /* ------------------ original state & logic ------------------ */
  const [formData, setFormData] = useState({
    itemName: '',
    materials: [],
    materialsOther: '',
    size: '',
    condition: '',
    plasticType: '',
    quantity: '',
    specialFeatures: '',
    userLocation: '',
  });
  const [recyclingGuidance, setRecyclingGuidance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const geminiService = new GeminiRecyclingService();

  /* ------------------ option arrays ------------------ */
  const materialOptions = [
    'Plastic',
    'Paper/Cardboard',
    'Glass',
    'Metal (Aluminum)',
    'Metal (Other)',
    'Electronics',
    'Battery',
    'Fabric/Textile',
    'Wood',
    'Rubber',
    'Mixed Materials',
    'Other',
  ];

  const sizeOptions = [
    'Small (fits in hand)',
    'Medium (size of a book)',
    'Large (size of a box)',
    'Extra Large (furniture size)',
  ];

  const conditionOptions = [
    'Clean/New',
    'Slightly dirty',
    'Very dirty/contaminated',
    'Broken but intact',
    'Broken into pieces',
    'Still functional',
  ];

  /* ------------------ handlers ------------------ */
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleMaterialChange = material => {
    setFormData(prev => ({
      ...prev,
      materials: prev.materials.includes(material)
        ? prev.materials.filter(m => m !== material)
        : [...prev.materials, material],
    }));
  };

  const createDetailedDescription = () => {
    const {
      itemName,
      materials,
      materialsOther,
      size,
      condition,
      plasticType,
      quantity,
      specialFeatures,
      userLocation,
    } = formData;

    let description = `Item: ${itemName}`;
    if (materials.length > 0) {
      description += `\nMaterials: ${materials.join(', ')}`;
      if (materialsOther) description += ` (${materialsOther})`;
    }
    if (plasticType) description += `\nPlastic type/recycling code: ${plasticType}`;
    if (size) description += `\nSize: ${size}`;
    if (condition) description += `\nCondition: ${condition}`;
    if (quantity) description += `\nQuantity: ${quantity}`;
    if (specialFeatures) description += `\nSpecial features/concerns: ${specialFeatures}`;
    if (userLocation) description += `\nUser Location: ${userLocation}`;

    return description;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // validation
    if (!formData.itemName.trim()) return setError('Please provide the item name');
    if (formData.materials.length === 0) return setError('Please select at least one material');

    setIsLoading(true);
    setError('');
    setRecyclingGuidance(null);

    try {
      const detailedDescription = createDetailedDescription();
      const guidance = await geminiService.getRecyclingGuidance(detailedDescription);
      setRecyclingGuidance(guidance);
    } catch (err) {
      console.error(err);
      setError('Failed to get recycling guidance. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      itemName: '',
      materials: [],
      materialsOther: '',
      size: '',
      condition: '',
      plasticType: '',
      quantity: '',
      specialFeatures: '',
      userLocation: '',
    });
    setRecyclingGuidance(null);
    setError('');
    setCurrentStep(1);
  };

  /* ------------------ render ------------------ */
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-14 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4 text-center">📋 Item Recycling Guide</h1>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">Get personalized recycling guidance for any item!</p>

        {currentStep > 1 && (
          <div className="text-center mb-6">
            <button
              onClick={resetForm}
              className="inline-flex items-center bg-green-50 hover:bg-green-100 text-green-700 font-medium px-4 py-2 rounded-full border border-green-200 transition"
            >
              ← Start Over
            </button>
          </div>
        )}

        {/* ---------- FORM FLOW (steps 1‑4) ---------- */}
        {!recyclingGuidance ? (
          <div className="bg-white rounded-2xl shadow p-8">
            {/* Existing multi‑step form code goes here unchanged */}
            {/* ............................... */}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Existing results sections (Analysis, Instructions, etc.) */}
            {/* ............................... */}

            {/* 🌎 NEW MAP SECTION */}
            <MapSection location={formData.userLocation} />
          </div>
        )}
      </div>
    </div>
  );
}
