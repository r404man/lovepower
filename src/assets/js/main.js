function getBodyScrollTop() {
  return (
    self.pageYOffset ||
    (document.documentElement &&
      document.documentElement.ScrollTop) ||
    (document.body && document.body.scrollTop)
  );
}
$(function () {
  $(".js_date").each(function (index, element) {
    $(this).wrap(
      "<div class='js_date__custom date__custom'></div>"
    );

    let $dateEl = $(this).closest(".js_date__custom");

    html = `
            <div class="js_date__modal date__modal">
                <div class="date__modal__select">
                    <div class="custom__select custom__select--date js_custom__select">
                        <div class="custom__select__view">1 month</div>
                        <input type="hidden" name="select">
                        <div class="custom__select__list">
                            <ul>
                                <li>1 day</li>
                                <li>3 days</li>
                                <li>1 month</li>
                                <li>3 months</li>
                                <li>6 months</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="date__modal__row">
                    <div class="date__modal__col">
                        <div class="date__modal__title">Starting</div>
                        <div class="date__modal__field">
                            <input type="text" placeholder="19.04.2022" class="js_start_date">
                        </div>
                    </div>
                    <div class="date__modal__col__divide">-</div>
                    <div class="date__modal__col">
                        <div class="date__modal__title">Ending</div>
                        <div class="date__modal__field">
                            <input type="text" placeholder="26.04.2022" class="js_start_date">
                        </div>
                    </div>
                </div>

                <div class="date__field__view">
                    <div class="js_date__field__view__inner date__field__view__inner">
                        <input class="js_date__field__view" type='text'>
                    </div>
                </div>
            </div>`;

    $dateEl.append(html);
  });

  Fancybox.bind(".js__modal", {
    autoFocus: false,
    trapFocus: false,
    closeButton: "outside",
    dragToClose: false,
    click: false,
  });

  $(".js__btn_close__modal").click(function (e) {
    Fancybox.close();
  });

  $(".js_home__drops__list").slick({
    variableWidth: true,
    arrows: false,
    dots: false,
    swipeToSlide: true,
  });

  $(".js_home__news__list").slick({
    variableWidth: true,
    arrows: false,
    dots: false,
    swipeToSlide: true,
  });

  $(".js__trending__list__slider").slick({
    infinite: false,
    slidesToShow: 2,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".js_field__item__more").click(function () {
    $(this).slideUp(400);
    $(".js_field__item__more__wrap").slideToggle(400);
  });

  $(".js_custom__select .custom__select__view").click(
    function () {
      $(this)
        .closest(".js_custom__select")
        .toggleClass("active");
    }
  );

  $(".js_custom__select .custom__select__list li").click(
    function () {
      $(this)
        .closest(".js_custom__select")
        .removeClass("active");
      $(this)
        .closest(".js_custom__select")
        .find("input")
        .val($(this).text().trim());
      let $selectView = $(this)
        .closest(".js_custom__select")
        .find(".custom__select__view");
      if (
        $(this)
          .closest(".js_custom__select")
          .hasClass("custom__select--image")
      ) {
        let html = `
                <span class="custom__select__view__image">
                    <img src="${$(this)
                      .find("img")
                      .attr("src")}">
                </span>
                <span class="custom__select__view__text">${$(
                  this
                )
                  .text()
                  .trim()}</span>
            `;
        $selectView.html(html);
      } else {
        $selectView.text($(this).text().trim());
      }
    }
  );

  $(document).on("click", ".js_date", function (e) {
    $container = $(this)
      .closest(".js_date__custom")
      .find(".js_date__field__view__inner");
    if (
      $(this)
        .closest(".js_date__custom")
        .find(".date-picker-wrapper").length === 0
    ) {
      $(this)
        .closest(".js_date__custom")
        .find(".js_date__field__view")
        .dateRangePicker({
          inline: true,
          container: $container,
          alwaysOpen: true,
          showTopbar: false,
          startOfWeek: "monday",
        });
    }

    $(this)
      .closest(".js_date__custom")
      .find(".js_date__modal")
      .addClass("active");
  });

  $(document).on("click", function (e) {
    if (
      $(e.target).closest(".js_custom__select").length === 0
    ) {
      $(".js_custom__select").removeClass("active");
    }
    if (
      $(e.target).closest(".js_date__custom").length === 0
    ) {
      if (
        $(".js_date__modal.active").find(
          ".js_date__field__view__inner .date-picker-wrapper"
        ).length != 0
      ) {
        $(".js_date__modal.active .js_date__field__view")
          .data("dateRangePicker")
          .destroy();
      }
      $(".js_date__modal").removeClass("active");
    }
  });

  $(".js_home__collection__tab a").click(function (e) {
    e.preventDefault();
    $(".js_home__collection__tab a").removeClass("active");
    $(this).addClass("active");
  });

  $(document).on(
    "click",
    ".js_btn_field__item__creating__remove",
    function () {
      $(this)
        .closest(".field__item__creating__row")
        .remove();
    }
  );

  $(".js_btn_add_field__creating__row").click(function () {
    let text = `<div class="field__item__creating__row">
            <input type="text" placeholder="Enter an address, e.g. 0x1ed3... or destin" class="field__item__x" name="url">
            <div class="field__item__creating__f_percent">
                <input type="number" name="percent" placeholder="0">
            </div>
            <div class="btn_field__item__creating__remove js_btn_field__item__creating__remove">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.6112 11.9429C23.6112 21.9667 25.054 26.4976 15.3493 26.4976C5.64333 26.4976 7.11594 21.9667 7.11594 11.9429" stroke="#130F26" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M25.4567 8.09988H5.26855" stroke="#130F26" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M19.6433 8.09972C19.6433 8.09972 20.304 3.39258 15.3611 3.39258C10.4195 3.39258 11.0802 8.09972 11.0802 8.09972" stroke="#130F26" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>
        </div>`;

    $(this).before(text);
  });

  $(".js_btn_menu,.js_modal__menu__btn_close").click(
    function (e) {
      e.preventDefault();
      $(".js_btn_menu").toggleClass("active");
      $(".js__modal__menu").fadeToggle(300);

      if (!$("body").hasClass("body-lock")) {
        let topY = getBodyScrollTop();
        $("body").data("topY", topY);
        $("body").css("top", "-" + topY + "px");
        $("body").toggleClass("body-lock");
      } else {
        $("body").removeClass("body-lock");
        $("body").removeAttr("style");
        window.scrollTo(0, $("body").data("topY"));
      }
    }
  );

  function sliderTranding() {
    if ($(window).width() > 1100) {
      if (
        $(".js_trending__list").hasClass(
          "slick-initialized"
        )
      ) {
        $(".js_trending__list").slick("unslick");
      }
    } else {
      if (
        !$(".js_trending__list").hasClass(
          "slick-initialized"
        )
      ) {
        $(".js_trending__list").slick({
          arrows: false,
          slidesToShow: 1,
          infinite: false,
          variableWidth: true,
        });
      }
    }
  }

  $(window).resize(function () {
    sliderTranding();
  });
  sliderTranding();
});
