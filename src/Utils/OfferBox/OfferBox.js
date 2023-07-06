import React from "react";

function OfferBox({ isNew, title }) {
  return (
    <div className="box-offer">
      <p className="new-offer">{isNew ? "nowość" : null}</p>
      <div className="mini">{title}</div>
    </div>
  );
}

export default OfferBox;
