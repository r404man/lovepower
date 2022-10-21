import React from "react";
import "./fixedprice.scss";

function FixedPrice() {
  return (
    <div className="main__content">
      <div className="container">
        <h1 className="main__title">List item for sale</h1>
        <div className="form__add">
          <form action="javascript:void(0)">
            <div className="field__item">
              <div className="field__item__title">Type</div>

              <div className="field__item__two__radio">
                <label className="field__item__two__radio__item">
                  <input type="radio" name="type" checked />
                  <div className="field__item__two__radio__item__inner">
                    <svg
                      width="9"
                      height="18"
                      viewBox="0 0 9 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.42857 11.9473C6.42857 12.9956 5.71648 13.5692 4.56923 13.5692C3.84352 13.5692 3.00824 13.3318 2.29293 12.8508C1.7624 12.4941 0.996682 12.4721 0.587398 12.9633L0.409035 13.1773C0.159626 13.4766 0.0960435 13.904 0.343674 14.2048C1.01744 15.0231 2.20606 15.5479 3.42198 15.7451V16.6044C3.42198 17.1567 3.86969 17.6044 4.42198 17.6044H4.6967C5.24899 17.6044 5.6967 17.1567 5.6967 16.6044V15.7253C7.65495 15.3297 9 13.9055 9 11.9275C9 7.31868 2.72967 8.22857 2.72967 5.36044C2.72967 4.45055 3.42198 3.83736 4.82637 3.83736C5.44633 3.83736 5.92997 3.95509 6.3536 4.1732C6.89689 4.45293 7.59929 4.41964 7.95549 3.92311L8.11119 3.70608C8.38705 3.32155 8.36097 2.78545 7.97365 2.51351C7.36522 2.08632 6.58849 1.78559 5.6967 1.64176V1C5.6967 0.447715 5.24899 0 4.6967 0H4.42198C3.86969 0 3.42198 0.447715 3.42198 1V1.68132C1.4044 2.11648 0.158242 3.63956 0.158242 5.38022C0.158242 9.89011 6.42857 9.21758 6.42857 11.9473Z"
                        fill="black"
                      />
                    </svg>
                    <div className="field__item__two__radio__item__text">
                      Fixed Price
                    </div>
                  </div>
                </label>
                <label className="field__item__two__radio__item">
                  <input type="radio" name="type" />
                  <div className="field__item__two__radio__item__inner">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.7077 9.00033C16.7077 13.257 13.2568 16.7087 8.99935 16.7087C4.74268 16.7087 1.29102 13.257 1.29102 9.00033C1.29102 4.74283 4.74268 1.29199 8.99935 1.29199C13.2568 1.29199 16.7077 4.74283 16.7077 9.00033Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.4918 9.6399L8.7168 9.57823V5.53906"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="field__item__two__radio__item__text">
                      Timed Auction
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className="field__item">
              <div className="field__item__title">
                Price
              </div>
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
              <div className="field__item__title">
                Duration
              </div>
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
              <div className="field__item">
                <div className="field__item__title">
                  Duration
                </div>
                <input
                  type="text"
                  placeholder="http://yoursite.io/item/123"
                  className="field__item__x js_date"
                  name="date"
                />
              </div>
              <div className="field__item">
                <div className="field__item__title">
                  Method
                </div>
                <div className="custom__select js_custom__select">
                  <div className="custom__select__view">
                    Sell to highest bidder
                  </div>
                  <input type="hidden" name="select" />
                  <div className="custom__select__list">
                    <ul>
                      <li>Sell to highest bidder 1</li>
                      <li>Sell to highest bidder 2</li>
                    </ul>
                  </div>
                </div>
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
                <div className="field__item__file__val">
                  2.5%
                </div>
              </div>
              <div className="field__item__file__list__row">
                Creator Fee
                <div className="field__item__file__title"></div>
                <div className="field__item__file__val">
                  0%
                </div>
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
        </div>
      </div>
    </div>
  );
}

export default FixedPrice;
