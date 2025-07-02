import React from "react";

export default function Card(props) {
  return (
    <div className="d-flex my-1 animate__animated animate__fadeInLeft">
      <div className="me-3 align-content-center" style={{ fontSize: "30px", fontWeight: "bold" }}>
        <h2>{props.heading}</h2>
      </div>
      <div className="flex-grow-1">
        <div className="p-3">
          <div className="d-flex align-items-center">
            <div className="progress flex-grow-1">
              <div
                className="progress-bar text-end fw-bold"
                role="progressbar"
                style={{ 
                  width: `${props.progress}%`,
                  "--progress-width": `${props.progress}%` // Set custom property for animation width
                }}
                aria-valuenow={props.progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {props.progress} %
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
