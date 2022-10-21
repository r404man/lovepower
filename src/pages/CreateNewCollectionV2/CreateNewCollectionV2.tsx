import React from "react";
import "./createNewCollectionV2.scss";

function CreateNewCollectionV2() {
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
                Logo image*
              </div>
              <div className="field__item__text">
                This image will also be used for navigation.
                350 x 350 recommended.
              </div>

              <label className="field__item__file field__item__file--small">
                <input type="file" name="file" />
              </label>
            </div>

            <div className="field__item">
              <div className="field__item__title">
                Featured image
              </div>
              <div className="field__item__text">
                This image will be used for featuring your
                collection on the homepage, category pages,
                or other promotional areas of OpenSea. 600 x
                400 recommended.
              </div>

              <label className="field__item__file field__item__file--medium">
                <input type="file" name="file" />
              </label>
            </div>

            <div className="field__item">
              <div className="field__item__title">
                Banner image
              </div>
              <div className="field__item__text">
                This image will appear at the top of your
                collection page. Avoid including too much
                text in this banner image, as the dimensions
                change on different devices. 1400 x 350
                recommended.
              </div>

              <label className="field__item__file">
                <input type="file" name="file" />
              </label>
            </div>

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
                    <li>Show Collections</li>
                    <li>Show NFTs</li>
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

            {/* <!-- тут блок с блокчейном --> */}

            <div className="field__item">
              <div className="field__item__title">
                Blockchain
              </div>
              <div className="field__item__text">
                Select the blockchain where you'd like new
                items from this collection to be added by
                default.
              </div>
              <div className="custom__select custom__select--image js_custom__select">
                <div className="custom__select__view">
                  <span className="custom__select__view__image">
                    <img
                      src="assets/images/icons/coin/1.svg"
                      alt=""
                    />
                  </span>
                  <span className="custom__select__view__text">
                    Ethereum
                  </span>
                </div>
                <div className="custom__select__list">
                  <ul>
                    <li>
                      <img
                        src="assets/images/icons/coin/1.svg"
                        alt=""
                      />
                      <span>Ethereum</span>
                    </li>
                    <li>
                      <img
                        src="assets/images/icons/coin/2.svg"
                        alt=""
                      />
                      <span>CUBE</span>
                    </li>
                    <li>
                      <img
                        src="assets/images/icons/coin/3.svg"
                        alt=""
                      />
                      <span>Ethereum 3</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="field__item">
              <div className="field__item__title">
                Payment tokens
              </div>
              <div className="field__item__text">
                These tokens can be used to buy and sell
                your items.
              </div>
              <div className="custom__select js_custom__select">
                <div className="custom__select__view">
                  Add token
                </div>
                <input type="hidden" name="select" />
                <div className="custom__select__list">
                  <ul>
                    <li>ETH</li>
                    <li>CUBE</li>
                    <li>APE</li>
                  </ul>
                </div>
              </div>

              <div className="added_tokken__list js_added_tokken__list">
                <div className="added_tokken__item">
                  <button className="added_tokken__item__remove"></button>
                  <div className="added_tokken__item__image">
                    <img
                      src="assets/images/icons/coin/1.svg"
                      alt=""
                    />
                  </div>
                  <div className="added_tokken__item__info">
                    <div className="added_tokken__item__title">
                      ETH
                    </div>
                    <div className="added_tokken__item__addtitle">
                      Ethereum
                    </div>
                  </div>
                </div>
                <div className="added_tokken__item">
                  <button className="added_tokken__item__remove"></button>
                  <div className="added_tokken__item__image">
                    <img
                      src="assets/images/icons/coin/2.svg"
                      alt=""
                    />
                  </div>
                  <div className="added_tokken__item__info">
                    <div className="added_tokken__item__title">
                      CUBE
                    </div>
                    <div className="added_tokken__item__addtitle">
                      Ethereum
                    </div>
                  </div>
                </div>
                <div className="added_tokken__item">
                  <button className="added_tokken__item__remove"></button>
                  <div className="added_tokken__item__image">
                    <img
                      src="assets/images/icons/coin/3.svg"
                      alt=""
                    />
                  </div>
                  <div className="added_tokken__item__info">
                    <div className="added_tokken__item__title">
                      APE
                    </div>
                    <div className="added_tokken__item__addtitle">
                      Ethereum
                    </div>
                  </div>
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

export default CreateNewCollectionV2;
