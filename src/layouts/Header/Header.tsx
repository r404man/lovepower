import React from "react";
import Logged from "./Logged/Logged";
import Simple from "./Simple/Simple";
import "./_header.scss";

function Header(props: any) {
  let nav = <Simple />;
  if (props.nav === "logged") {
    nav = <Logged />;
  }

  return (
    <div>
      <header className="header_main">
        <div className="container">
          <a href="index.html" className="header__logo">
            <img
              src="assets/images/logo.png"
              alt="main logo"
            />
          </a>

          <div className="header__search">
            <form
              action="javascript:void(0)"
              className="js_form"
            >
              <input
                type="text"
                required
                className="header__search__field"
                placeholder="Search"
              />
              <input
                type="submit"
                className="header__search__btn"
                value="Отправить"
              />
            </form>
          </div>

          {nav}
        </div>
      </header>

      <div className="menu__mobile js__modal__menu">
        <div className="container">
          <div className="menu__mobile__search">
            <div className="header__search">
              <form
                action="javascript:void(0)"
                className="js_form"
              >
                <input
                  type="text"
                  required
                  className="header__search__field"
                  placeholder="Search"
                />
                <input
                  type="submit"
                  className="header__search__btn"
                  value="Отправить"
                />
              </form>
            </div>
          </div>
          <div className="menu__mobile__col">
            <ul>
              <li className="menu__mobile__title">
                <a href="">Create</a>
              </li>
              <li>
                <a href="">NFT</a>
              </li>
              <li>
                <a href="">Collection</a>
              </li>
            </ul>
          </div>
          <div className="menu__mobile__col">
            <ul>
              <li className="menu__mobile__title">
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">Owned NFT</a>
              </li>
              <li>
                <a href="">Created NFT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
