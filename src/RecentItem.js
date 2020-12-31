import React from "react";
import "./RecentItem.css";

const RecentItem = ({ url, title }) => {
  return (
    <div className="item">
      <iframe
        width="400"
        height="235"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="item__details">
        <img
          src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-144x192.jpg"
          alt="video"
        ></img>
        <div className="item__detailsText">
          <h4>{title}</h4>
          <p>bret_ai</p>
          <p>Science & Tech</p>
        </div>
      </div>
    </div>
  );
};

export default RecentItem;
