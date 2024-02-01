import React from "react";

function DarkModeToggle() {
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      Toggle Dark Mode
    </button>
  );
}

export default DarkModeToggle;
