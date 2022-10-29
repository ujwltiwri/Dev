// import { useRouter } from "next/router";
// import React, { useContext, useEffect } from "react";
// import Profile from "../components/Profile";
// import { AuthContext } from "../context/auth";

// const Redirect = () => {
//   const { push } = useRouter();
//   useEffect(() => {
//     push("/login");
//   }, []);
//   return null;
// };

// function profile() {
//   const { user } = useContext(AuthContext);
//   console.log("profile", user);

//   return <>{user?.uid ? <Profile /> : <Redirect />}</>;
// }

// export default profile;

import { useRouter } from "next/router";
import React, { useContext } from "react";
import Profile from "../components/Profile";
import { AuthContext } from "../context/auth";
function profile() {
  const { user } = useContext(AuthContext);
  const Redirect = () => {
    const router = useRouter();
    router.push("/login");
  };
  return (
    //this component will only be visible when user is logged in
    <>{user?.uid ? <Profile /> : <Redirect />}</>
  );
}

export default profile;
