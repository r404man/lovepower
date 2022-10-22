import React from "react";
import OfferTableRow from "./parts/OfferTableRow";

function OfferTable() {
  return (
    <div className="offer__table">
      <div className="offer__table__thead">
        <div className="offer__table__col offer__table__col--1">
          Price
        </div>
        <div className="offer__table__col offer__table__col--2">
          USD Price
        </div>
        <div className="offer__table__col offer__table__col--3">
          Floor Difference
        </div>
        <div className="offer__table__col offer__table__col--4">
          Expiration
        </div>
        <div className="offer__table__col offer__table__col--5">
          From
        </div>
      </div>
      <div className="offer__table__tbody">
        <OfferTableRow />
        <OfferTableRow />
        <OfferTableRow />
        <OfferTableRow />
        <OfferTableRow />
      </div>
    </div>
  );
}

export default OfferTable;
