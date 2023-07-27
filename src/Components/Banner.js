import React from "react";
import artist from "../img/artist.jpg";

import { FaEllipsisH, FaHeadphones } from "react-icons/fa";
function Banner() {
  return (
    <div className="Banner">
      <img src={artist} alt="" className="bannerImg" />

      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>/Recommended songs</span>
          </p>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>Top 10 songs</h2>
            </div>
          </div>

          <div className="right">
            <a href="#"> Play</a>
          </div>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
}

export { Banner };
