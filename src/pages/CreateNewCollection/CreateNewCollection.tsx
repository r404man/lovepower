import React from "react";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import EarningsField from "../../components/EarningsField/EarningsField";

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
              <CustomSelect />
              {/* <div className="custom__select js_custom__select">
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
              </div> */}
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
              <EarningsField />
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
