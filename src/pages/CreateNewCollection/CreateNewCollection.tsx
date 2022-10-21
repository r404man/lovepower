import React from "react";
import "./createNewCollection.scss";

function CreateNewCollection() {
  return (
    <div className="main__content">
      <div className="container">
        <h1 className="main__title">
          Create New Collection
        </h1>
        <div className="form__add">
          <form action="javascript:void(0)">
            <div className="field__item">
              <div className="field__item__title">
                Name*
              </div>
              <input
                type="text"
                placeholder="Item name"
                className="field__item__x"
                required
                name="name"
              />
            </div>

            <div className="field__item">
              <div className="field__item__title">URL</div>
              <div className="field__item__text">
                Customize your URL on OpenSea. Must only
                contain lowercase letters, numbers, and
                hyphens.
              </div>
              <input
                type="text"
                placeholder="http://yoursite.io/item/123"
                className="field__item__x"
                name="url"
              />
            </div>

            <div className="field__item">
              <div className="field__item__title">
                Description
              </div>
              <div className="field__item__text">
                0 of 1000 characters used.
              </div>
              <textarea
                placeholder="Description..."
                className="field__item__x field__item__x--textarea"
                required
                name="description"
              ></textarea>
            </div>

            <div className="field__item">
              <div className="field__item__title">
                Category
              </div>
              <div className="field__item__text">
                Select a category will help make your item
                discoverable.
              </div>
              <div className="custom__select js_custom__select">
                <div className="custom__select__view">
                  Select category
                </div>
                <input type="hidden" name="select" />
                <div className="custom__select__list">
                  <ul>
                    <li>option 1</li>
                    <li>option 2</li>
                    <li>option 3</li>
                    <li>option 4</li>
                    <li>option 5</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="field__item">
              <div className="field__item__title">
                Links
              </div>
              <div className="field__item__group">
                <input
                  type="text"
                  placeholder="http://yoursite.io/item/123"
                  className="field__item__x field__item__x--site"
                  name="url"
                />
                <input
                  type="text"
                  placeholder="http://yoursite.io/item/123"
                  className="field__item__x field__item__x--discord"
                  name="url"
                />
                <input
                  type="text"
                  placeholder="http://yoursite.io/item/123"
                  className="field__item__x field__item__x--tg"
                  name="url"
                />
              </div>
            </div>

            <div className="field__item">
              <div className="field__item__title">
                Creator earnings
              </div>
              <div className="field__item__text">
                Earn a percentage of the sale price every
                time one of your items is sold. Adding
                multiple addresses may increase gas fees for
                buyers.
              </div>
              <div className="field__item__creating">
                <div className="field__item__creating__row">
                  <input
                    type="text"
                    placeholder="Enter an address, e.g. 0x1ed3... or destin"
                    className="field__item__x"
                    name="url"
                  />
                  <div className="field__item__creating__f_percent">
                    <input
                      type="number"
                      name="percent"
                      placeholder="0"
                    />
                  </div>
                  <div className="btn_field__item__creating__remove js_btn_field__item__creating__remove">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.6112 11.9429C23.6112 21.9667 25.054 26.4976 15.3493 26.4976C5.64333 26.4976 7.11594 21.9667 7.11594 11.9429"
                        stroke="#130F26"
                        strokeWidth="1.875"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.4567 8.09988H5.26855"
                        stroke="#130F26"
                        strokeWidth="1.875"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.6433 8.09972C19.6433 8.09972 20.304 3.39258 15.3611 3.39258C10.4195 3.39258 11.0802 8.09972 11.0802 8.09972"
                        stroke="#130F26"
                        strokeWidth="1.875"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="btn_add_field__creating__row js_btn_add_field__creating__row btn__default">
                  Add address +
                </div>
              </div>
            </div>

            <div className="field__item field__item--sensitive">
              <div className="field__item__title">
                Explicit & sensitive content
              </div>
              <div className="field__item__text">
                Set this collection as explicit and
                sensitive content
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
              <label className="checkbox__field">
                <input type="checkbox" name="sensitive" />
                <div className="checkbox__field__view"></div>
              </label>
            </div>

            <div className="field__item field__item--submit">
              <input
                type="submit"
                value="Create"
                className="btn__default btn__send"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNewCollection;
