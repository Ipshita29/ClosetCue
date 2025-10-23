import React, { useState } from "react";

const HeroSection = () => {
  const [weather, setWeather] = useState("");
  const [mood, setMood] = useState("");
  const [event, setEvent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ weather, mood, event });
  };

  const outfitSuggestions = [
    // ... outfitSuggestions array remains the same ...
    { id: 1, title: "Autumn Layers", description: "Stylish layers for a cool, crisp fall afternoon.", image: "https://via.placeholder.com/300x400/D97706/FFFFFF?text=Autumn+Layers" },
    { id: 2, title: "Cozy Fireside", description: "Soft knits and dark denim for ultimate comfort.", image: "https://via.placeholder.com/300x400/92400E/FFFFFF?text=Fireside+Cozy" },
    { id: 3, title: "Office Chic", description: "Tailored trousers and a neutral blazer for work.", image: "https://via.placeholder.com/300x400/65A30D/FFFFFF?text=Office+Chic" },
    { id: 4, title: "Weekend Brunch", description: "A flowy dress or skirt with stylish boots.", image: "https://via.placeholder.com/300x400/BE123C/FFFFFF?text=Brunch+Style" },
    { id: 5, title: "Date Night", description: "Elegant and sophisticated for an evening out.", image: "https://via.placeholder.com/300x400/F97316/FFFFFF?text=Date+Night" },
    { id: 6, title: "Rainy Day", description: "Waterproof jacket and practical, stylish bottoms.", image: "https://via.placeholder.com/300x400/4B5563/FFFFFF?text=Rainy+Day" },
    { id: 7, title: "Formal Event", description: "Black tie or cocktail attire for a gala.", image: "https://via.placeholder.com/300x400/78350F/FFFFFF?text=Formal+Wear" },
    { id: 8, title: "Pumpkin Patch", description: "Overalls and a chunky sweater for outdoor fun.", image: "https://via.placeholder.com/300x400/842029/FFFFFF?text=Pumpkin+Patch" },
  ];

  return (
    <main className="hero-main section-padding">
      <div className="container">
        
        {/* Hero Text Section */}
        <div className="text-center section-margin-bottom">
          <h1 className="hero-title">
            Discover Your{" "}
            {/* The gradient is now approximated by a solid color in pure CSS */}
            <span className="hero-gradient-text">Perfect Outfit</span>
          </h1>
          <p className="hero-subtitle">
            ClosetCue uses AI to craft personalized outfit recommendations based
            on your weather, mood, and upcoming events. Say goodbye to decision
            fatigue!
          </p>
        </div>

        {/* Form and How It Works - Central Card */}
        <div className="content-card section-margin-bottom">
          <div className="content-grid"> 
            
            {/* How It Works Description */}
            <div className="works-panel"> 
                <h2>How ClosetCue Works</h2>
                <p style={{marginBottom: '1rem'}}>
                    Simply tell us about your day—the **Weather**, your **Mood**, and the **Event**.
                </p>
                <p>
                    Our AI analyzes these three factors to suggest a **curated, stylish outfit** tailored just for you from your virtual closet.
                </p>
            </div>

            {/* Input Form */}
            <div>
                <h3 style={{marginBottom: '1.5rem'}}>Tell Us About Your Day</h3>
                <form onSubmit={handleSubmit} className="form-space">
                    {/* Input Field: Weather */}
                    <div className="form-group">
                        <label htmlFor="weather" className="form-label">Weather</label>
                        <input type="text" id="weather" value={weather} onChange={(e) => setWeather(e.target.value)}
                        className="form-input" placeholder="e.g., Cool, 55°F, Sunny"/>
                    </div>
                    {/* Input Field: Mood */}
                    <div className="form-group">
                        <label htmlFor="mood" className="form-label">Mood</label>
                        <input type="text" id="mood" value={mood} onChange={(e) => setMood(e.target.value)}
                        className="form-input" placeholder="e.g., Cozy, Productive, Festive"/>
                    </div>
                    {/* Input Field: Event */}
                    <div className="form-group">
                        <label htmlFor="event" className="form-label">Event</label>
                        <input type="text" id="event" value={event} onChange={(e) => setEvent(e.target.value)}
                        className="form-input" placeholder="e.g., Casual Brunch, Business Meeting, Fall Festival"/>
                    </div>
                    {/* Submit Button */}
                    <button type="submit" className="submit-btn">
                        Generate My Outfit
                    </button>
                </form>
            </div>
          </div>
        </div>

        {/* Outfit Suggestions */}
        <div className="section-margin-bottom">
          <h3 style={{marginBottom: '4rem', textAlign: 'center'}}>Featured Outfit Ideas</h3>
          <div className="outfit-grid">
            {outfitSuggestions.map((outfit) => (
              <div key={outfit.id} className="outfit-card">
                <div className="card-image-wrapper">
                  <img src={outfit.image} alt={outfit.title} className="card-image"/>
                </div>
                <div className="card-content">
                  <h4 className="card-title">{outfit.title}</h4>
                  <p className="card-description">{outfit.description}</p>
                  <button className="card-detail-btn">
                    View Details
                    {/* SVG icon remains a simple icon, not dependent on CSS framework */}
                    <svg style={{marginLeft: '0.25rem', width: '1rem', height: '1rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
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