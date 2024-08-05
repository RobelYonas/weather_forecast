import React from 'react'

export default function seachbar() {
    const [input, setInput] = useState("");


  return (
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
  );
}
