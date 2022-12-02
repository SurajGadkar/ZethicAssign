import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header flexbox-container">
      <div className="flex-item item1">
        <h1>Cars</h1>
      </div>

      <div className="flex-item item2">
        <ul className="flexbox-container">
          <li className="link link1">Things1</li>
          <li className="link link2">Things2</li>
          <li className="link link3">Things3</li>
        </ul>
      </div>
    </div>
  );
}
