import React from "react";

function Header() {
  return (
    <header>
      <div className="shadow"></div>
      <div className="container landing">
        <div className="text-box">
          <h1 className="title">
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className="subtitle">Nie wierz nam na słowo - sprawdź</p>
          <div className="bt-main">
            <a className="main-button" href="#offer">
              Oferta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
