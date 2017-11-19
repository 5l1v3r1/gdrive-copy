import React from 'react';
import './spinner.css';

export default function Spinner(props) {
  return (
    <span>
      <svg
        className="spinner"
        width={props.width}
        height={props.height}
        viewBox="0 0 100 100"
      >
        {/* Major arc */}
        <path
          id="path1"
          stroke-width="3px"
          stroke="#000"
          fill="none"
          d="M10.123310854875854 25.123310854875854 a47 47 0 1 0 15 -15"
          transform="rotate(35 50 50)"
        />

        {/* Minor arc */}
        <path
          id="path2"
          stroke-width="3px"
          stroke="none"
          fill="none"
          d="M10.123310854875854 25.123310854875854 a47 47 1 0 1 15 -15"
          transform="rotate(35 50 50)"
        />
      </svg>
    </span>
  );
}
