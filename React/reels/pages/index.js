import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Feed from "../components/Feed";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";
export default function Home() {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  const Redirect = () => {
    const router = useRouter();
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Reels App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/instagram-reels.png" />
      </Head>
      {user?.uid ? <Feed /> : <Redirect />}
    </div>
  );
}
