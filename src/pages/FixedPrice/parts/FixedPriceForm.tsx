import React from "react";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import FixedPriceFormDate from "./FormControls/FixedPriceFormDate";
import FixedPriceFormRadio from "./FormControls/FixedPriceFormRadio";

function FixedPriceForm() {
  return (
    <form action="javascript:void(0)">
      <div className="field__item">
        <div className="field__item__title">Type</div>
        <FixedPriceFormRadio />
      </div>

      <div className="field__item">
        <div className="field__item__title">Price</div>
        <div className="field__item__row">
          <div className="field__item field__item--small">
            <input
              type="text"
              placeholder="LPM"
              className="field__item__x"
              required
              name="price-1"
            />
          </div>
          <div className="field__item field__item--big">
            <input
              type="text"
              placeholder="Amount"
              className="field__item__x"
              required
              name="price-1"
            />
          </div>
        </div>
      </div>

      <div className="field__item">
        <div className="field__item__title">Duration</div>
        <input
          type="text"
          placeholder="20/09/2022"
          className="field__item__x js_date"
          name="date"
        />
      </div>

      <a
        href="javascript:void(0)"
        className="field__item__more js_field__item__more"
      >
        More options
        <svg
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 1C15 1 10.856 8 8 8C5.145 8 1 1 1 1"
            stroke="#4737FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <div className="field__item__more__wrap --hide js_field__item__more__wrap">
        <FixedPriceFormDate />

        <div className="field__item">
          <div className="field__item__title">Method</div>
          <CustomSelect />
        </div>
      </div>

      <div className="field__item">
        <div className="field__item__title">
          Fees
          <span className="point_x">
            <div className="point_x_view">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.25 12C21.25 18.937 18.937 21.25 12 21.25C5.063 21.25 2.75 18.937 2.75 12C2.75 5.063 5.063 2.75 12 2.75C18.937 2.75 21.25 5.063 21.25 12Z"
                  stroke="#130F26"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15.895V12"
                  stroke="#130F26"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.0045 8.5H11.9955"
                  stroke="#130F26"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="point_x_show">
              Lorem ipsum dolor sit amet.
            </div>
          </span>
        </div>
      </div>

      <div className="field__item__file__list">
        <div className="field__item__file__list__row">
          <div className="field__item__file__title">
            Creator Fee
          </div>
          <div className="field__item__file__val">2.5%</div>
        </div>
        <div className="field__item__file__list__row">
          Creator Fee
          <div className="field__item__file__title"></div>
          <div className="field__item__file__val">0%</div>
        </div>
      </div>

      <div className="field__item field__item--submit">
        <input
          type="submit"
          value="Complete listing"
          className="btn__default btn__send btn__send--2"
        />
      </div>
    </form>
  );
}

export default FixedPriceForm;
