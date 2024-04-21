import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export default function SitemarkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" fill="none">
      {/* Background gradient */}
      <rect width="300" height="100" fill="url(#grad1)" />
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#005A87", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#53C8E5", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      {/* Wave and runner silhouette */}
      <path
        d="M40,75 Q60,50 80,75 T120,75 T160,75 T200,75 T240,75 T280,75"
        stroke="#ffffff"
        strokeWidth="2"
        fill="transparent"
      />
      <path d="M150,50 L140,70 L160,70 Z" fill="#ffffff" />

      {/* Text */}
      <text
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="bold"
        x="150"
        y="50"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        ULTRABALATON
      </text>
    </svg>
  );
}
