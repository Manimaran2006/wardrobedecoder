import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ must import
import "./Gender.css";

const Gender = () => {   // ✅ uppercase component
  const navigate = useNavigate();

  const genderData = ["Male", "Female","Child", "Couple"]
  const MaleData = ["Shirt", "T-Shirt"]
  const FemaleData = ["Saree", "Sudi"]

  const [group, setGroup] = useState("None");
  const [renderData, setRenderData] = useState(genderData);

  useEffect(()=>{
    switch (group) {
      case "Male":
        setRenderData(MaleData);
        break;
      case "Female":
        setRenderData(FemaleData);
        break;
      default:
        setRenderData(genderData);
        break;
    }
  },[group])

  return (
    <div className="genderPage">
      <h1>Gender Selection</h1>
      <div className="set">
          {renderData.map((data, index) =>(
            <button key={index} onClick={() => setGroup(data)}>{data}</button>
          ))}
      </div>
    </div>
  );
};

export default Gender;
