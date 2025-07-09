import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Guide from "./pages/Guide";
import About from "./pages/About";
import { Leaf, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  { name: "Guide", href: "/guide" },
  { name: "About", href: "/about" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white/70 backdrop-blur sticky top-0 shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-extrabold flex items-center gap-2">
          <Leaf className="w-6 h-6 text-green-600" />
          EzRecycle
        </h1>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium hover:text-green-700 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white/90 backdrop-blur shadow animate-fade-in">
          <div className="px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-base font-medium hover:text-green-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Leaf className="w-5 h-5 text-green-500" />
            EzRecycle
          </h4>
          <p>Making recycling effortless, one item at a time.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Navigate</h5>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center py-4 text-sm bg-gray-900">
        © {new Date().getFullYear()} EzRecycle. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-green-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
