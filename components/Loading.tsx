import React from "react";

export default function Loading() {
  return (
    <React.Fragment>
      <div
        className="spinner-border inline-block h-10 w-10 animate-spin rounded-full border-4 border-neutral-300 border-r-primary-400"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </React.Fragment>
  );
}
