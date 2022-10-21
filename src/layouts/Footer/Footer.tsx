import React from "react";
import logo from "./../../assets/images/logo__white.svg";
import "./_footer.scss";

function Footer() {
  return (
    <footer className="main_footer">
      <div className="container">
        <a href="index.php" className="footer__logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="footer__copyright">
          © lovepowermarket 2022 All rights reserved
        </div>
      </div>
    </footer>
  );
}

{
  /* @@include('modal.html') */
}
{
  /* <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script src="js/app.min.js?1"></script> */
}

export default Footer;
