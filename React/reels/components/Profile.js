import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import profilePic from "../assets/avatar.png";
function Profile() {
  //this component will only be visible when user is logged in
  return (
    <div>
      <Navbar />
      <div>
        <div className="profile-intro">
          <div style={{ height: "8rem", width: "8rem" }}>
            <Image src={profilePic} />
          </div>
          <div>
            <h1>Ujjwal</h1>
            <h1>Posts: 12</h1>
          </div>
        </div>
        <div className="profile-posts">
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
          <video src=""></video>
        </div>
      </div>
    </div>
  );
}

export default Profile;
