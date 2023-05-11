import React, { useState } from "react";
import MultipleDatePicker from "react-multiple-datepicker";
// import "react-multiple-datepicker/dist/index.css";

export default function App() {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateSelect = (dates: any) => {
    setSelectedDates(dates);
  };

  return (
    <div>
      <h1>Select Dates</h1>
      <MultipleDatePicker onSubmit={handleDateSelect} />
      <div>
        <h2>Selected Dates</h2>
        <ul>
          {selectedDates.map((date) => (
            <li key={date.toISOString()}>{date.toLocaleDateString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
