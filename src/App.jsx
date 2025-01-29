import React, { useState } from "react";
import MultiSelectDropdown from "./MultiSelectDropdown";

const generateItems = (count) =>
  Array.from({ length: count }, (_, i) => ({
    title: `Item ${i + 1}`,
    value: i + 1,
  }));

function App() {
  const [items] = useState(() => generateItems(10000));
  const [selectedValues, setSelectedValues] = useState([]);
  console.log("selectedValues", selectedValues);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <MultiSelectDropdown
        data={items}
        height="300px"
        width="300px"
        onChange={setSelectedValues}
        showSelected
        selectedColor="#e3f2fd"
        hoverColor="#f5f5f5"
        checkmarkColor="#2196f3"
      />

      <div style={{ marginTop: "2rem" }}>
        <h3>Selected Items: {selectedValues.length}</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {selectedValues.map((value) => (
            <div
              key={value}
              style={{ padding: "4px 8px", background: "#e3f2fd" }}
            >
              Item {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
