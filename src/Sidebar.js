import React from "react";
import Channel from "./Channel";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLOWED CHANNEL</h5>
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/01e090cac26e0de0-profile_image-150x150.png"
          name="bret_ai"
          followers="816K"
        />
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/e394a6ae-7640-4c8e-a132-380d5fa0638c-profile_image-150x150.png"
          name="bret_ai"
          followers="816K"
        />
        <h5>RECOMMENDED CHANNEL</h5>
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/efccec87-715e-483f-8491-c534a29be297-profile_image-150x150.png"
          name="bret_ai"
          followers="816K"
        />
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/c5734711-63c9-40f5-8e95-b010b464c421-profile_image-150x150.png"
          name="bret_ai"
          followers="816K"
        />
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/01e090cac26e0de0-profile_image-150x150.png"
          name="bret_ai"
          followers="816K"
        />
        <p className="sidebar__topShoreMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search for friends" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
