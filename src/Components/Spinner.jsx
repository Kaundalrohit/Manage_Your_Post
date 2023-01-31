import React from "react";

export default function Spinner() {
  return (
    <>
      <div className="my-3">
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
}
