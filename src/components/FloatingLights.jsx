import React from "react";
import "./FloatingLights.css";

export default function FloatingLights() {
  return (
    <div className="lights">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="light" style={{ animationDelay: `${i * 3}s` }} />
      ))}
    </div>
  );
}
