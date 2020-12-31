import React from "react";
import "./Profile.css";
import RecentItem from "./RecentItem";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/efccec87-715e-483f-8491-c534a29be297-profile_image-150x150.png"
          alt="profilePic"
        />
        <div className="profile__topLeftDetails">
          <h1>bret_ai</h1>
          <h3>820k followers</h3>
        </div>
      </div>
      <div className="profile__topRight">
        <i className="fas fa-heart bg-gray"></i>
        <i className="fas fa-bell bg-gray"></i>
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i className="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>
      <div className="profile__recent">
        <h2>Recent Broadcasts</h2>
        <div className="profile__recentItems">
          <RecentItem
            url={"https://www.youtube.com/embed/tdJ15C5ubnM"}
            title={
              "🔴 Searching for the Origin of Life across the Universe - Potential Life on other Planetary Documentary"
            }
          />
          <RecentItem
            url={"https://www.youtube.com/embed/nFOiycRpTiQ"}
            title={
              "🔴 A JOURNEY BEYOND THE BOUNDARIES OF THE SOLAR SYSTEM | FILM | KOSMO STREAM 24/7"
            }
          />
          <RecentItem
            url={"https://www.youtube.com/embed/8mve0UoSxTo"}
            title={"🔴 Mathematics is the queen of Sciences"}
          />
        </div>
        <div className="profile__categories">
          <h2>Bret_ai's recently streamed categories</h2>
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-144x192.jpg"
            alt="video"
          />
          <h3>Science & Tech</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
