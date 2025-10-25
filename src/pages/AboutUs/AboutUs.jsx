import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: '✨',
      title: 'Smart Outfit Suggestions',
      description: 'AI-powered recommendations based on your style and occasion'
    },
    {
      icon: '👖',
      title: 'Clothing Organization',
      description: 'Categorize and manage your wardrobe digitally with ease'
    },
    {
      icon: '🎨',
      title: 'Style Inspiration',
      description: 'Discover new trends and create unique fashion combinations'
    },
    {
      icon: '📱',
      title: 'Easy-to-Use Interface',
      description: 'Simple, intuitive design that makes styling effortless'
    }
  ];

  return (
    <div className="about-container">
      {/* Full Width Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>About ClosetCue 👗✨</h1>
          <p>Your digital closet bestie for effortless style</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to ClosetCue — your go-to spot for effortless style inspo.
          </p>
          <p>
            We help you mix, match, and slay every outfit without the stress.
          </p>
          <p>
            Think of us as your digital closet bestie—keeping it simple, fun, and 100% you.
          </p>
        </div>

        {/* Features Grid Section - 2 cards upar, 2 cards niche */}
        <div className="features-grid">
          <h2>What We Offer</h2>
          <div className="features-container">
            {/* First Row - 2 Cards */}
            <div className="features-row">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            
            {/* Second Row - 2 Cards */}
            <div className="features-row">
              {features.slice(2, 4).map((feature, index) => (
                <div key={index + 2} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;