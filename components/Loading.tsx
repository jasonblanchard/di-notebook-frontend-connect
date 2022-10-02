import React from "react";

export default function Loading() {
  return (
    <React.Fragment>
      <div
        className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full border-neutral-300 border-r-primary-400"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </React.Fragment>
  );
}
