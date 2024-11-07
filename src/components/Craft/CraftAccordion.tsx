import React, { useState } from "react";

const CraftAccordion = () => {
  const [activePanel, setActivePanel] = useState<number | null>(0);

  const togglePanel = (panelIndex: number) => {
    setActivePanel((prev) => (prev === panelIndex ? null : panelIndex));
  };

  return (
    <div style={{ width: 350, marginRight: 32 }}>
      <button className="accordion" onClick={() => togglePanel(0)}>
        Introduction
      </button>
      <div
        className="panel"
        style={{ display: activePanel === 0 ? "block" : "none" }}
      >
        <p>
          This app is a custom-built item checker, designed to save time and
          simplify the process of matching product codes. These product codes,
          also known as SKUs, help track inventory accurately.
        </p>
      </div>

      <button className="accordion" onClick={() => togglePanel(1)}>
        Why
      </button>
      <div
        className="panel"
        style={{ display: activePanel === 1 ? "block" : "none" }}
      >
        <p>
          The accountant was using Excel files—a code database and a report with
          thousands of items—matched manually with Excel functions. Despite
          this, the task was still tedious and time-consuming.
        </p>
      </div>

      <button className="accordion" onClick={() => togglePanel(2)}>
        What
      </button>
      <div
        className="panel"
        style={{ display: activePanel === 2 ? "block" : "none" }}
      >
        <p>
          The app reads two Excel files—the database and the report. It filters
          the database to remove duplicate SKUs, then matches items from the
          report. It generates two outputs: a summary of total matches and
          non-matches, and a new Excel file with items from the report, showing
          their respective match results and suggestions.
        </p>
      </div>

      <button className="accordion" onClick={() => togglePanel(3)}>
        How
      </button>
      <div
        className="panel"
        style={{ display: activePanel === 3 ? "block" : "none" }}
      >
        <p>
          Built with React and TypeScript, the app uses an Excel library to read
          files and regular expressions for matching, reducing the task from 10
          hours to 5 minutes.
        </p>
      </div>
    </div>
  );
};

export default CraftAccordion;
