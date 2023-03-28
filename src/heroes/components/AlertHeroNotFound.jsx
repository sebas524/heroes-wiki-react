import React from "react";

export const AlertHeroNotFound = ({ q }) => {
  return (
    <div className="alert alert-danger">
      no such hero found: <b>{q}</b>
    </div>
  );
};
