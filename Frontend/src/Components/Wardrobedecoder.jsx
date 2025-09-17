import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Wardrobedecoder.css';

const WardrobeDecoder = () => {
  const [size, setSize] = useState('');
  const [skinTone, setSkinTone] = useState('');
  const [occasion, setOccasion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results', { state: { size, skinTone, occasion } });
  };

  return (
    <div className="decoder-container">
      <div className="decoder-form-wrapper">
        <h2>Find Your Perfect Look</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Size</label>
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder="Enter your size"
              required
            />
          </div>
          <div className="form-group">
            <label>Skin Tone</label>
            <select
              value={skinTone}
              onChange={(e) => setSkinTone(e.target.value)}
              required
            >
              <option value="">Select skin tone</option>
              <option value="Fair / Light Skin Tone">Fair / Light Skin Tone</option>
              <option value="Medium Skin Tone">Medium Skin Tone</option>
              <option value="Olive Skin Tone">Olive Skin Tone</option>
              <option value="Brown Skin Tone">Brown Skin Tone</option>
              <option value="Dark / Deep Skin Tone">Dark / Deep Skin Tone</option>
            </select>
          </div>
          <div className="form-group">
            <label>Occasion</label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="">Select Occasion</option>
              <option value="vacation">Vacation</option>
              <option value="wedding">Wedding</option>
              <option value="interview">Interview</option>
              <option value="casual">Casual</option>
            </select>
          </div>
          <button type="submit">Get Outfit Suggestions</button>
        </form>
      </div>
    </div>
  );
};

export default WardrobeDecoder;
