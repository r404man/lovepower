import React from "react";
import "./cardActivity.scss";

function CardActivity(props: any) {
  return (
    <div className="card_activity">
      <div
        className="activity__list__col activity__list__col--name"
        data-title="Artwork"
      >
        <div className="activity__list__image">
          <div className="activity__list__image__inner">
            <img src="assets/images/pages/home/collection/1.jpg" />
          </div>
        </div>
        <div className="activity__list__name">
          {/* @@name */}
          Unwillingly on Course
        </div>
      </div>

      <div
        className="activity__list__col activity__list__col--from"
        data-title="From"
      >
        <div className="user__unit">
          <div className="user__unit__image">
            <img src="assets/images/pages/home/hide__seek/1.jpg" />
          </div>
          <div className="user__unit__title">
            @dielamaharanie
          </div>
        </div>
      </div>
      <div
        className="activity__list__col activity__list__col--to"
        data-title="To"
      >
        <div className="user__unit">
          <div className="user__unit__image">
            <img src="assets/images/pages/home/hide__seek/2.jpg" />
          </div>
          <div className="user__unit__title">
            @Isayev_art
          </div>
        </div>
      </div>

      <div
        className="activity__list__col activity__list__col--type"
        data-title="Type"
      >
        {/* {props.type} */}
        Type
      </div>
      <div
        className="activity__list__col activity__list__col--type"
        data-title="Price"
      >
        3.475 LPM
      </div>
      <div
        className="activity__list__col activity__list__col--date"
        data-title="Date"
      >
        3 months ago
        {/* {props.date} */}
      </div>
    </div>
  );
}

export default CardActivity;
