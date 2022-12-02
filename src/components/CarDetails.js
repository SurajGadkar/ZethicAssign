import React from "react";
import SideBar from "./SideBar";
import MainBody from "./MainBody";
import "../styles/CarDetails.css";

export function CarDetails() {
  return (
    <div className="body flex-container">
      {/* SideBar Component */}
      <div className="flex-item sidebar">
        <SideBar />
      </div>

      {/* Main Component */}
      <div className="flex-item mainbody">
        <MainBody />
      </div>
    </div>
  );
}
