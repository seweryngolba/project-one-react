import React from "react";

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
            <div className="box-offer" key={index}>
              {offer.isNew && (
                <>
                  <p className="new-offer">{offer.title}</p>
                  <div className="mini"></div>
                </>
              )}
              {!offer.isNew && <>{offer.title}</>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
