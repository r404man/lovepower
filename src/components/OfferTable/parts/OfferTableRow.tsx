import React from "react";

function OfferTableRow() {
  return (
    <div className="offer__table__row">
      <div
        className="offer__table__col offer__table__col--1"
        data-title="Price"
      >
        0,10 ETH
      </div>
      <div
        className="offer__table__col offer__table__col--2"
        data-title="USD Price"
      >
        $393,63
      </div>
      <div
        className="offer__table__col offer__table__col--3"
        data-title="Floor Difference"
      >
        25% below
      </div>
      <div
        className="offer__table__col offer__table__col--4"
        data-title="Expiration"
      >
        9 minutes
      </div>
      <div
        className="offer__table__col offer__table__col--5"
        data-title="From"
      >
        <a href="">Curlyboy_Vault</a>
      </div>
    </div>
  );
}

export default OfferTableRow;
