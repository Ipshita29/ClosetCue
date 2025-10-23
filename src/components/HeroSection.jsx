import React, { useState } from "react";

const HeroSection = () => {
  const [weather, setWeather] = useState("");
  const [mood, setMood] = useState("");
  const [event, setEvent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with AI backend for outfit generation
    console.log({ weather, mood, event });
  };

  const outfitSuggestions = [
    {
      id: 1,
      title: "Summer Casual",
      description: "Light and breezy for sunny outings.",
      image:
        "https://via.placeholder.com/300x400/4F46E5/FFFFFF?text=Summer+Casual",
    },
    {
      id: 2,
      title: "Evening Formal",
      description: "Elegant attire for sophisticated evenings.",
      image:
        "https://via.placeholder.com/300x400/7C3AED/FFFFFF?text=Evening+Formal",
    },
    {
      id: 3,
      title: "Weekend Relaxed",
      description: "Comfy layers for laid-back weekends.",
      image:
        "https://via.placeholder.com/300x400/10B981/FFFFFF?text=Weekend+Relaxed",
    },
    {
      id: 4,
      title: "Office Professional",
      description: "Sharp and polished for workdays.",
      image:
        "https://via.placeholder.com/300x400/F59E0B/FFFFFF?text=Office+Pro",
    },
    {
      id: 5,
      title: "Beach Vacation",
      description: "Vibrant and flowy for seaside escapes.",
      image:
        "https://via.placeholder.com/300x400/EF4444/FFFFFF?text=Beach+Vacay",
    },
    {
      id: 6,
      title: "Party Night",
      description: "Bold and fun for nightlife vibes.",
      image:
        "https://via.placeholder.com/300x400/EC4899/FFFFFF?text=Party+Night",
    },
    {
      id: 7,
      title: "Winter Cozy",
      description: "Warm knits for chilly adventures.",
      image:
        "https://via.placeholder.com/300x400/06B6D4/FFFFFF?text=Winter+Cozy",
    },
  ];

  return (
    <main className="flex-grow bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Discover Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Perfect Outfit
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            ClosetCue uses AI to craft personalized outfit recommendations based
            on your weather, mood, and upcoming events. Say goodbye to decision
            fatigue!
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg">
            Get Started Now
          </button>
        </div>

        {/* How It Works Description */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            How ClosetCue Works
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Simply input your current weather, how you're feeling, and the event
            you're dressing for. Our AI analyzes your prompts and suggests
            curated outfits from your virtual closet—tailored just for you.
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Tell Us About Your Day
          </h3>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            <div>
              <label
                htmlFor="weather"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Weather
              </label>
              <input
                type="text"
                id="weather"
                value={weather}
                onChange={(e) => setWeather(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="e.g., Sunny, 75°F"
              />
            </div>
            <div>
              <label
                htmlFor="mood"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mood
              </label>
              <input
                type="text"
                id="mood"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="e.g., Energetic, Relaxed"
              />
            </div>
            <div>
              <label
                htmlFor="event"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Event
              </label>
              <input
                type="text"
                id="event"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="e.g., Casual outing, Formal dinner"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300 transform hover:scale-105"
            >
              Generate My Outfit
            </button>
          </form>
        </div>

        {/* Outfit Suggestions */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Featured Outfit Ideas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {outfitSuggestions.map((outfit) => (
              <div
                key={outfit.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={outfit.image}
                    alt={outfit.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition duration-300">
                    {outfit.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {outfit.description}
                  </p>
                  <button className="mt-4 w-full text-indigo-600 font-medium hover:text-indigo-800 transition duration-300 text-sm">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
