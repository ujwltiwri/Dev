import "../styles/globals.css";
import "../pages/signup/signup.css";
import "../pages/login/login.css";
import "../pages/forget/forget.css";
import "../components/Feed.css";
import "../components/Profile.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AuthWrapper from "../context/auth";
function MyApp({ Component, pageProps }) {
  return (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  );
}

export default MyApp;
