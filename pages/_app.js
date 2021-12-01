import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";

import { auth } from "../lib/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useUserData } from "../lib/hooks";

function MyApp({ Component, pageProps }) {
  useUserData();
  // console.log(auth);
  // const [user] = useAuthState(auth);
  // console.log(user);

  // useEffect(() => {
  //   if (user) {
  //   } else {
  //     user = null;
  //   }
  // });

  return (
    <>
      <UserContext.Provider value={{ user: {}, username: "rohan" }}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
