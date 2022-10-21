import React from "react";
import { Helmet } from "react-helmet-async";

function Links() {
  return (
    <Helmet>
      <script
        src="assets/js/vendor/jquery.min.js"
        type="text/javascript"
      />
      <script
        src="assets/js/vendor/moment.min.js"
        type="text/javascript"
      />
      <script
        src="assets/js/vendor/fancybox.umd.js"
        type="text/javascript"
      />
      <script
        src="assets/js/vendor/gsap.min.js"
        type="text/javascript"
      />
      <script
        src="assets/js/vendor/ScrollTrigger.min.js"
        type="text/javascript"
      />
      <script
        src="assets/js/vendor/slick.min.js"
        type="text/javascript"
      />
      <script
        src="assets/js/vendor/jquery.daterangepicker.min.js"
        type="text/javascript"
      />
      <script
        src="assets/js/main.js"
        type="text/javascript"
      />

      <title>Name</title>
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href="assets/images/favicon/favicon-128x128.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="64x64"
        href="assets/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="assets/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="assets/images/favicon/favicon-16x16.png"
      />
      <meta
        name="msapplication-TileColor"
        content="#224fc2"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="format-detection"
        content="telephone=no"
      />
      <meta
        http-equiv="x-ua-compatible"
        content="ie=edge"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"
      />
    </Helmet>
  );
}

export default Links;
