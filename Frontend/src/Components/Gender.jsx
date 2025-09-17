import React from "react";
import { useNavigate } from "react-router-dom";
import "./Gender.css";

const Gender = () => {
  const navigate = useNavigate();

  return (
    <div className="gender-page">
      <h1>Select Category</h1>
      <div className="gender-buttons">
        <button onClick={() => navigate("/DressForm/male")}>Male</button>
        <button onClick={() => navigate("/DressForm/female")}>Female</button>
        <button onClick={() => navigate("/DressForm/child")}>Child</button>
        <button onClick={() => navigate("/DressForm/couple")}>Couple</button>
      </div>
    </div>
  );
};

export default Gender;
