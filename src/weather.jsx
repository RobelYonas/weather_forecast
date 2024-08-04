import { useState } from "react";
import React from "react";

export default function weather() {
  const [input, setInput] = useState("");

  return (
    <div>
      <div className="search_section">
        <div className="search_bar">
          <label htmlFor="cityInput">Your City</label>
          <input
            id="cityInput"
            placeholder="Enter city"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
      <div className="weather_display">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
}
