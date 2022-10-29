// import React, { useContext, useEffect, useState } from "react";
// import Image from "next/image";
// import Navbar from "./Navbar";
// import profilePic from "../assets/avatar.png";
// import { AuthContext } from "../context/auth";
// import { doc, onSnapshot } from "firebase/firestore";
// import { db } from "../firebase";
// function Profile() {
//   const { user } = useContext(AuthContext);
//   const [userData, setUserData] = useState({});
//   //this component will only be visible when user is logged in
//   useEffect(() => {
//     console.log(user);
//     const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
//       console.log("doc", doc.data());
//       setUserData(doc.data());
//     });
//     return () => unsub();
//   }, [user]);
//   return (
//     <div>
//       <Navbar userData={userData} />
//       <div>
//         <div className="profile-intro">
//           <div style={{ height: "8rem", width: "8rem" }}>
//             <Image src={profilePic} />
//           </div>
//           <div>
//             <h1>Ujjwal</h1>
//             <h1>Posts: 12</h1>
//           </div>
//         </div>
//         <div className="profile-posts">
//           <video src=""></video>
//           <video src=""></video>
//           <video src=""></video>
//           <video src=""></video>
//           <video src=""></video>
//           <video src=""></video>
//           <video src=""></video>
//           <video src=""></video>
//           <video src=""></video>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import user from "../assets/avatar.png";
import { AuthContext } from "../context/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
function Profile() {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    console.log("user", user);
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      console.log("doc", doc.data());
      setUserData(doc.data());
    });
    return () => unsub();
  }, [user]);
  return (
    <div>
      <Navbar userData={userData} />
      <div>
        <div className="profile-intro">
          <div
            className="img-wrapper"
            // style={{
            //   height: "8rem",
            //   width: "8rem",
            //   borderRadius: "50%",
            //   boxSizing: "content-box",
            // }}
          >
            <div className="main-img">
              <Image height={200} width={200} src={userData.profilePhoto} />
            </div>
          </div>
          <div>
            <h1>{userData.fullName}</h1>
            <h1>Posts: {userData.posts?.length}</h1>
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
