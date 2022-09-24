import React from "react";

export default function Navbar() {
  return (
    // Navbar
    <nav data-testid="navbar" className="navbar">
      <div className="container at-container">
        {/* Hacker Brand */}
        <a data-testid="navbar-brand" className="navbar-brand at-item" href="index.html">
          <span>Hacker News</span>
        </a>
      </div>
    </nav>
  );
}