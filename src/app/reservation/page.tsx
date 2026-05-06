'use client';

import React, { useState } from 'react';
import './reservation.css';

export default function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="reservation-page">
      <div className="reservation-header">
        <h1 className="reservation-title">Reserve Your Table</h1>
        <p className="reservation-subtitle">
          Join us for an unforgettable dining experience. Please complete the form below to secure your reservation.
        </p>
      </div>

      <div className="reservation-container">
        {submitted ? (
          <div className="text-center" style={{ padding: '40px 0' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', marginBottom: '16px' }}>Reservation Confirmed</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px' }}>
              Thank you for choosing Culinique. We look forward to welcoming you.
            </p>
            <button 
              className="submit-btn" 
              style={{ width: 'auto', marginTop: '32px', padding: '16px 32px' }}
              onClick={() => setSubmitted(false)}
            >
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="date" id="date" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="time" className="form-label">Time</label>
              <select id="time" className="form-select" required>
                <option value="">Select a time</option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="guests" className="form-label">Number of Guests</label>
              <select id="guests" className="form-select" required>
                <option value="">Select guests</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="occasion" className="form-label">Occasion</label>
              <select id="occasion" className="form-select">
                <option value="none">Standard Dining</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" id="name" className="form-input" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" id="email" className="form-input" placeholder="Your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" id="phone" className="form-input" placeholder="Your phone number" required />
            </div>

            <div className="form-group full-width">
              <label htmlFor="requests" className="form-label">Special Requests (Optional)</label>
              <textarea 
                id="requests" 
                className="form-textarea" 
                placeholder="Dietary restrictions, seating preferences, etc."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Confirm Reservation</button>
          </form>
        )}
      </div>
    </div>
  );
}
