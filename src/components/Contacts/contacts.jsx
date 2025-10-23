import React, { useState } from 'react';
import './contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you ASAP. 💌');
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        
        {/* Updated Header Section */}
        <div className="contact-header">
          <h1 className="contact-title">
            Get in Touch
          </h1>
          <p className="contact-subtitle">
            Got questions about styling, collaboration ideas, or just want to share your fashion journey? 
            <span className="highlight"> Let's create style magic together! ✨</span>
          </p>
        </div>

        {/* Rest of the code remains same */}
        <div className="contact-content">
          <div className="contact-form-container">
            
            <div className="contact-form-box">
              
              <div className="form-header">
                <h2 className="form-title">
                  Send us a Message
                </h2>
                <p className="form-description">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select a subject</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="form-textarea"
                    placeholder="Tell us what's on your mind... We're here to help!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="form-submit-btn"
                >
                  Send Message ✨
                </button>
              </form>

              <div className="contact-info">
                <h3 className="contact-info-title">Other Ways to Reach Us</h3>
                <div className="contact-info-content">
                  <a
                    href="mailto:hello@closetcue.com"
                    className="contact-email-link"
                  >
                    <svg className="email-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hello@closetcue.com
                  </a>
                  <div className="response-time">
                    Typically reply within <span className="response-highlight">24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;