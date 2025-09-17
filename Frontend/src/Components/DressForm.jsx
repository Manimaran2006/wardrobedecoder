import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import formConfig from "./FormConfig";
import "./DressForm.css";

const DressForm = () => {
  const { gender } = useParams();
  const navigate = useNavigate();

  // Ensure lowercase key for safety
  const genderKey = gender?.toLowerCase();
  const config = formConfig[genderKey];

  // Local state for sizes
  const [size, setSize] = useState("");
  const [maleSize, setMaleSize] = useState("");
  const [femaleSize, setFemaleSize] = useState("");
  const [dressType, setDressType] = useState(config?.dressTypes[0] || "");
  const [occasion, setOccasion] = useState(config?.occasions[0] || "");

  if (!config) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Invalid Category Selected
      </h2>
    );
  }

  const handleSubmit = () => {
    if (genderKey === "couple") {
      if (!maleSize || !femaleSize) {
        alert("Please enter both Male and Female sizes!");
        return;
      }
      alert(
        `Fetching outfit for COUPLE: \n Male Size: ${maleSize} \n Female Size: ${femaleSize} \n Dress Type: ${dressType} \n Occasion: ${occasion}`
      );
    } else {
      if (!size) {
        alert("Please enter your size!");
        return;
      }
      alert(
        `Fetching outfit for : ${gender.toUpperCase()} \n Size: ${size} \n Dress Type: ${dressType} \n Occasion: ${occasion}`
      );
    }
  };

  return (
    <div className="dressform">
      <div className="form-container">
        <h1>
          {gender.charAt(0).toUpperCase() + gender.slice(1)} Outfit Form
        </h1>

        {/* ✅ Conditional Size Input */}
        {genderKey === "couple" ? (
          <>
            <div className="form-group">
              <label>Male Size:</label>
              <input 
                type="text"
                value={maleSize}
                onChange={(e) => setMaleSize(e.target.value)}
                placeholder="Enter Female size (e.g., S, M, L)"
                />
            </div>

            <div className="form-group">
              <label>Female Size:</label>
              <input
                type="text"
                value={femaleSize}
                onChange={(e) => setFemaleSize(e.target.value)}
                placeholder="Enter Female size (e.g., S, M, L)"
              />
            </div>
          </>
        ) : (
          <div className="form-group">
            <label>Size:</label>
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder="Enter size (e.g., S, M, L, XL)"
            />
          </div>
        )}

        {/* Dress Type */}
        <div className="form-group">
          <label>Dress Type:</label>
          <select
             value={dressType}
             onChange={(e) => setDressType(e.target.value)}
             >
              <option value="" disabled>
                Select a dress
              </option>

              {config.dressTypes.map((dress, index) => (
                <option key={index} value={dress}>
                  {dress}
                </option>
              ))}
             </select>
        </div>

        {/* Occasion */}
        <div className="form-group">
          <label>Occasion:</label>
          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="" disabled>
              ---Select a accusion---
            </option>

            {config.occasions.map((occ, index) => (
              <option key={index} value={occ}>
                {occ}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button className="submit-btn" onClick={handleSubmit}>
            Get Outfit
          </button>
          <button className="back-btn" onClick={() => navigate(-1)}>
            ⬅ Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DressForm;
