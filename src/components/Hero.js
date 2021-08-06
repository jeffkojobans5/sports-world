import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1 style={{ color: 'white'}}>Best & Affordable </h1>
        <p style={{ color: 'white'}}>Sports Products </p>
        {children}
      </div>
    </div>
  );
}