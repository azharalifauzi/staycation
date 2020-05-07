import React from "react";

import IconCities from "assets/icons/ic_cities.svg";
import IconTraveler from "assets/icons/ic_traveler.svg";
import IconTreasure from "assets/icons/ic_treasure.svg";
import ImgHero from "assets/images/img-hero.jpg";
import ImgHeroFrame from "assets/images/img-hero-frame.jpg";

import Button from "elements/button/button";

import formatNumber from "utils/formatNumber";

const Hero = ({ data, showMostPicked }) => {
  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: "530px" }}>
          <h1 className="font-weight-bold mb-3 line-height-1">
            Forget Busy Work <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>

          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: "35px" }}>
              <img
                src={IconTraveler}
                alt={`${data.travelers} travelers`}
                width="36"
                height="36"
              />
              <h6 className="mt-3">
                {formatNumber(data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: "35px" }}>
              <img
                src={IconTreasure}
                alt={`${data.treasures} treasures`}
                width="36"
                height="36"
              />
              <h6 className="mt-3">
                {formatNumber(data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                src={IconCities}
                alt={`${data.cities} cities`}
                width="36"
                height="36"
              />
              <h6 className="mt-3">
                {formatNumber(data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{ width: 540, height: 370 }}>
            <img
              src={ImgHero}
              alt="room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImgHeroFrame}
              alt="room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
