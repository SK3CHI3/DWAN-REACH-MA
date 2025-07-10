import React from 'react';

const DawnReachLogo = ({ className = '', ...props }) => (
  <svg
    viewBox="0 0 400 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Balanced circle arc to avoid clipping text */}
    <path
      d="M365 100c0 70-58 95-165 95S35 170 35 100 90 5 200 5c45 0 85 10 115 28"
      stroke="black"
      strokeWidth="6"
      fill="none"
    />

    {/* DawnReach – bold and centered */}
    <text
      x="50%"
      y="90"
      textAnchor="middle"
      fontFamily="'Segoe UI', Arial, sans-serif"
      fontWeight="bold"
      fontSize="40"
      fill="black"
    >
      DawnReach
    </text>

    {/* Marketing – spaced gently, avoiding the arc */}
    <text
      x="63%"
      y="90"
      textAnchor="start"
      fontFamily="'Segoe UI', Arial, sans-serif"
      fontWeight="normal"
      fontSize="34"
      fill="black"
    >
      Marketing
    </text>

    {/* Tagline – centered and styled for hierarchy */}
    <text
      x="50%"
      y="135"
      textAnchor="middle"
      fontFamily="'Segoe UI', Arial, sans-serif"
      fontWeight="normal"
      fontSize="18"
      fill="black"
    >
      EMPOWERING BRANDS TO NEW HEIGHTS
    </text>
  </svg>
);

export default DawnReachLogo; 