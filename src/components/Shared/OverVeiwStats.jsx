import React from "react";
import "../../Styles/SharedStyle/OverVeiwStats.css";
import { Fade } from "react-awesome-reveal";

const OverViewStats = ({ overview, stats }) => {
  return (
    <div className="overviewstats-box">
      <div className="overviewbox">
        <Fade direction="left">
        <img src={overview.imageSrc} alt={overview.altText} />
        </Fade>
        <Fade direction="right">
        <div className="details">
          <h1>{overview.title}</h1>
          <p>{overview.content}</p>
        </div>
        </Fade>
      </div>
      <div className="statsbox">
      <Fade direction="right">
        <div className="details">
          <h1>{stats.title}</h1>
          <p>{stats.content}</p>
        </div>
        </Fade>
        <Fade direction="right">
        <img src={stats.imageSrc} alt={stats.altText} />
        </Fade>
      </div>
    </div>
  );
};

export default OverViewStats;
