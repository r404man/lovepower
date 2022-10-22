import React from "react";
import UserUnit from "../UserUnit/UserUnit";

function UserTop() {
  return (
    <div className="user__top">
      <div className="user__top__cover">
        <div className="user__top__cover__inner">
          <img src="assets/images/__content/user/cover.png" />
        </div>
      </div>
      <div className="container">
        <div className="user__top__row">
          <div className="user__top__who">
            <div className="user__top__avatar">
              <div className="user__top__avatar__inner">
                <img src="assets/images/__content/user/avatar.jpg" />
              </div>
            </div>
            <div className="user__top__name">
              DigiDaigaku Genesis
            </div>
            <UserUnit />
          </div>

          <div className="user__top__info">
            <div className="user__top__info__item">
              <div className="user__top__info__item__val">
                30
              </div>
              <div className="user__top__info__item__title">
                Collection of
              </div>
            </div>

            <div className="user__top__info__item">
              <div className="user__top__info__item__val">
                10
                <div className="user__top__info__item__val__images">
                  <div className="user__top__info__item__val__image">
                    <img src="assets/images/__content/user/cover/1.jpg" />
                  </div>
                  <div className="user__top__info__item__val__image">
                    <img src="assets/images/__content/user/cover/2.jpg" />
                  </div>
                  <div className="user__top__info__item__val__image">
                    <img src="assets/images/__content/user/cover/3.jpg" />
                  </div>
                </div>
              </div>
              <div className="user__top__info__item__title">
                Owned by
              </div>
            </div>

            <div className="user__top__info__item">
              <div className="user__top__info__item__val">
                6.7k
              </div>
              <div className="user__top__info__item__title">
                Floor Price
              </div>
            </div>

            <div className="user__top__info__item">
              <div className="user__top__info__item__val">
                6.7
              </div>
              <div className="user__top__info__item__title">
                Total Sales
              </div>
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

export default UserTop;
