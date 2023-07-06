import React from "react";
import OfferBox from "../../Utils/OfferBox/OfferBox";

function OfferSection() {
  const offers = [
    { title: "Usługa 1", isNew: true },
    { title: "Usługa 2", isNew: false },
    { title: "Usługa 3", isNew: false },
    { title: "Usługa 4", isNew: false },
    { title: "Usługa 5", isNew: false },
    { title: "Usługa 6", isNew: false },
  ];

  return (
    <section className="offer" id="offer">
      <div className="container">
        <h2 className="headline-offer">Czym zajmuje się nasza firma?</h2>
        <div className="box-grid">
          {offers.map((offer, index) => (
            <OfferBox key={index} title={offer.title} isNew={offer.isNew} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
