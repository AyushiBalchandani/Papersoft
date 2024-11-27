import React from "react";
import "../../Styles/LettersStyles.css";

// Sample data for files with dates
const fileData = [
  { name: "File1", date: "2024-06-22" },
  { name: "File2", date: "2024-06-24" },
  { name: "File3", date: "2024-06-24" },
  { name: "File4", date: "2024-06-21" },
  { name: "File5", date: "2024-06-23" },
  { name: "File6", date: "2024-06-25" },
];

// Function to sort files by date in descending order
const sortFilesByDate = (files) => {
  return files.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Main Home component
const Letters = () => {
  const sortedFiles = sortFilesByDate(fileData);
  const today = new Date().toISOString().split("T")[0]; // Get today's date in 'YYYY-MM-DD' format

  const todayFiles = sortedFiles.filter((file) => file.date === today);
  const otherFiles = sortedFiles.filter((file) => file.date !== today);

  return (
    <div className="container">
      <h1>Latest Letters</h1>
      {todayFiles.length > 0 && (
        <div>
          <h2>Today</h2>
          <ul className="ordered-list">
            {todayFiles.map((file, index) => (
              <li key={index}>
                {file.name} - {file.date}
              </li>
            ))}
          </ul>
        </div>
      )}
      {otherFiles.length > 0 && (
        <div>
          <h2>Other Days</h2>
          <ul className="ordered-list">
            {otherFiles.map((file, index) => (
              <li key={index}>
                {file.name} - {file.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Letters;
