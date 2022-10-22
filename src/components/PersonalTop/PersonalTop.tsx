import React from "react";
import UserUnit from "../UserUnit/UserUnit";

function PersonalTop() {
  return (
    <div className="user__top">
      <div className="user__top__cover">
        <div className="user__top__cover__inner user__top__cover__inner--bg">
          <img src="assets/images/__content/user/cover.png"></img>
        </div>
      </div>
      <div className="container">
        <div className="user__top__row">
          <div className="user__top__who">
            <div className="user__top__avatar user__top__avatar--round">
              <div className="user__top__avatar__inner"></div>
            </div>

            <div className="user__top__name">
              DigiDaigaku Genesis
            </div>
            <UserUnit />
          </div>

          <div className="user__top__info user__top__info--social">
            <div className="user__top__info__social">
              <a href="" target="_blank">
                <img src="assets/images/icons/social/web.svg" />
              </a>
              <a href="" target="_blank">
                <img src="assets/images/icons/social/inst.svg" />
              </a>
              <a href="" target="_blank">
                <img src="assets/images/icons/social/tw.svg" />
              </a>
              <a href="" target="_blank">
                <img src="assets/images/icons/social/tg.svg" />
              </a>
              <a href="" target="_blank">
                <img src="assets/images/icons/social/fb.svg" />
              </a>
              <a href="" target="_blank">
                <img src="assets/images/icons/social/dc.svg" />
              </a>
              <a href="" target="_blank">
                <img src="assets/images/icons/social/you.svg" />
              </a>
            </div>
          </div>
        </div>

        <div className="user__text">
          <p>
            DigiDaigaku is a collection of 2022 unique
            characters developed by Limit Break, a company
            founded by world famous game designers Gabriel
            Leydon and Halbert Nakagawa. Currently,
            DigiDaigaku characters live in a mysterious
            world unknown to outsiders, but in time,
            exciting details about their world will be
            revealed.
          </p>
          <p>
            Learn more about the project at:{" "}
            <a href="">https://digidaigaku.com</a> and{" "}
            <a href="">https://twitter.com/DigiDaigaku</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalTop;
