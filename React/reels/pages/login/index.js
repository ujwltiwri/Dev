import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/Instagram.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Carousel } from "react-responsive-carousel";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg5 from "../../assets/bg5.jpg";
import Alert from "@mui/material/Alert";
import { AuthContext } from "../../context/auth";
import { useRouter } from "next/router";

function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, user } = useContext(AuthContext);
  const router = useRouter();

  //If user is logged in then user will always be redirected to home page and if logged out then only user will come Here
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  let handleLogin = async () => {
    try {
      console.log(email);
      console.log(password);
      setLoading(true);
      setError("");
      await login(email, password);
      console.log("logged in");
      router.push("/");
    } catch (err) {
      let errObj = err.code.slice(5).split("-");
      setError(`${errObj[0]} ${errObj[1]}`);

      setTimeout(() => {
        setError("");
      }, 2000);
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="insta-mob-bg">
        <div className="carousel">
          <Carousel
            autoPlay={true} //even if i don't set it to true then it will work because all these props are true by default
            interval={2000}
            infiniteLoop
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            stopOnHover
            showStatus={false}
          >
            <Image src={bg1} />
            <Image src={bg2} />
            <Image src={bg3} />
            <Image src={bg4} />
            <Image src={bg5} />
          </Carousel>
        </div>
      </div>
      <div className="login-card">
        <div className="login-top-card">
          <Image src={logo} />
          <div className="info">
            Sign up to see photos and videos from your friends
          </div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            style={{ marginTop: "1rem" }}
            onClick={handleLogin}
          >
            Log in
          </Button>
          {/* if error , then show error */}
          {error != "" && (
            <Alert severity="error" variant="filled" sx={{ mt: ".5rem" }}>
              {error}
            </Alert>
          )}
          <Link href={"/forget"}>
            <div
              className="info"
              style={{ color: "blueviolet", marginTop: ".5rem" }}
            >
              Forget Password ?
            </div>
          </Link>
        </div>
        <div className="login-bottom-card">
          Don't have an account ?
          <Link href="/signup">
            <span style={{ color: "blueviolet" }}> Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default index;
