import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

/**
 * EzRecycle – Homepage Component
 * Now features a persistent hamburger menu in the top‑right that opens a slide‑out drawer.
 * Tailwind CSS for styling and framer‑motion for animations.
 */
export default function Home() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Quiz & Planner", href: "#quiz" },
    { name: "Resources", href: "#resources" },
    { name: "About", href: "#about" },
  ];

  return (
    <div className="font-sans text-gray-100 bg-green-900 min-h-screen">
      {/* Header */}
      <header className="relative z-40 flex items-center justify-between px-6 py-4 bg-green-800 shadow-lg">
        <h1 className="text-2xl font-bold tracking-wider">EzRecycle</h1>

        {/* Hamburger (always visible) */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open Navigation"
          className="p-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-lime-300"
        >
          <FiMenu size={28} />
        </button>
      </header>

      {/* Slide‑out drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black" 
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-green-800 shadow-xl flex flex-col pt-6 px-6"
            >
              <button
                aria-label="Close Navigation"
                className="self-end mb-6"
                onClick={() => setOpen(false)}
              >
                <FiX size={28} />
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 text-lg hover:text-lime-300 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-green-700 bg-[url('/recycle-hero.jpg')] bg-cover bg-center bg-blend-multiply">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Recycle Smarter, <span className="text-lime-300">Live Greener</span>
        </motion.h2>
        <p className="max-w-2xl text-lg md:text-xl mb-8">
          EzRecycle guides you through everyday recycling with interactive tools, local resources, and personalized planning.
        </p>
        <a
          href="#quiz"
          className="px-8 py-3 rounded-2xl bg-lime-400 text-green-900 font-semibold hover:bg-lime-300 transition-colors shadow-lg"
        >
          Take the Recycling Quiz
        </a>
      </section>

      {/* Feature cards */}
      <section className="grid md:grid-cols-3 gap-8 px-6 py-20 bg-green-900">
        {[
          {
            title: "What Can I Recycle?",
            desc: "Browse our searchable database of common household items and learn how to dispose of them responsibly.",
            icon: "♻️",
          },
          {
            title: "Find Drop-Offs Near You",
            desc: "Locate recycling centers, e-waste events, and donation hubs in your community.",
            icon: "📍",
          },
          {
            title: "Build Sustainable Habits",
            desc: "Set weekly goals and reminders with our planner to make recycling second nature.",
            icon: "📅",
          },
        ].map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
          >
            <span className="text-5xl mb-4">{card.icon}</span>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-200">{card.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* About section */}
      <section id="about" className="px-6 py-20 flex flex-col md:flex-row items-center gap-8 bg-green-800">
        <img
          src="/about-recycle.jpg"
          alt="People recycling"
          className="w-full md:w-1/2 rounded-2xl shadow-lg"
        />
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold mb-4">About EzRecycle</h3>
          <p className="text-lg leading-relaxed">
            Born from a passion for sustainability, EzRecycle aims to simplify recycling for everyone. Our mission is to empower communities with the knowledge and tools they need to reduce waste and protect the planet.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-green-700 text-center text-sm">
        <p>© {new Date().getFullYear()} EzRecycle. Built with love for a cleaner Earth.</p>
      </footer>
    </div>
  );
}
