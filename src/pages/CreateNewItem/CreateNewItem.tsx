import React from "react";

function CreateNewItem() {
  return (
    <div className="main__content">
      <div className="container">
        <h1 className="main__title">Create New Item</h1>
        <div className="form__add">
          <form action="javascript:void(0)">
            <div className="field__item">
              <div className="field__item__title">
                Image, Video, Audio, or 3D Model*
              </div>
              <div className="field__item__text">
                File types supported: JPG, PNG, GIF, SVG,
                MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max
                size: 100 MB
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
                Collection
              </div>
              <div className="field__item__text">
                This is the collection where your item will
                appear.
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
                Supply
              </div>
              <div className="field__item__text">
                The number of items that can be minted. No
                gas cost to you!
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
              <input
                type="text"
                placeholder="1"
                className="field__item__x"
                name="url"
              />
            </div>

            <div className="field__item">
              <div className="field__item__title">
                Freeze metadata
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
              <div className="field__item__text">
                Freezing your metadata will allow you to
                permanently lock and store all of this
                item's content in decentralized file
                storage.
              </div>
              <input
                type="text"
                placeholder="To freeze your metadata, you must create your item first "
                className="field__item__x"
                name="text"
              />
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

export default CreateNewItem;
