import React from "react";

function Modal() {
  return (
    <>
      <div
        className="default__modal modal__connect"
        id="js_modal_connect"
      >
        <div className="modal__connect__inner">
          <div className="modal__connect__title">
            Connect a wallet
          </div>
          <div className="modal__connect__text">
            If you don't have a wallet yet, you can select a
            provider and create one now.
          </div>

          <div className="modal__connect__list">
            <a href="" className="modal__connect__link">
              <img
                src="images/icons/wallet/1.svg"
                alt="MetaMask"
              />
              MetaMask
            </a>
            <a href="" className="modal__connect__link">
              <img
                src="images/icons/wallet/2.svg"
                alt="MetaMask"
              />
              WalletConnect
            </a>
            <a href="" className="modal__connect__link">
              <img
                src="images/icons/wallet/3.svg"
                alt="MetaMask"
              />
              Coinbase Wallet
            </a>
            <a href="" className="modal__connect__link">
              <img
                src="images/icons/wallet/4.svg"
                alt="MetaMask"
              />
              Gnosis Safe
            </a>
          </div>
          <a
            href=""
            className="btn__default btn_modal__connect"
          >
            Learn about wallets
          </a>
        </div>
      </div>

      <div
        className="default__modal modal__offer"
        id="js_modal_offer"
      >
        <div className="modal__offer__inner">
          <div className="modal__offer__title">
            Lower the listing price
          </div>
          <div className="modal__offer__form">
            <form action="">
              <div className="field__item">
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
                  <div className="field__item__title__inner">
                    <div className="field__item__title__inner__text">
                      Use previous listing expiration date
                    </div>
                    <label className="checkbox__field">
                      <input
                        type="checkbox"
                        name="sensitive"
                      />
                      <div className="checkbox__field__view"></div>
                    </label>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="20/09/2022"
                  className="field__item__x js_date"
                  name="date"
                />
              </div>

              <div className="field__item__modal__text">
                You must pay an additional gas fee if you
                want to cancel this listing at a later
                point.{" "}
                <a href="">
                  Learn more about canceling listings.
                </a>
              </div>
              <div className="modal__offer__btns">
                <a
                  href=""
                  className="btn__default btn__x btn__ghost_x"
                >
                  Never mind
                </a>
                <a
                  href=""
                  className="btn__default btn__x btn__orange_x"
                >
                  Set new price
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
