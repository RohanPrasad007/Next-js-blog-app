import React, { useContext } from "react";
import { auth, provider } from "../lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { UserContext } from "../lib/context";

function Enter() {
  // const user = null;
  // const username = null;
  const { user, username } = useContext(UserContext);

  return (
    <main>
      {(() => {
        if (user && username) {
          return <SignOutButton />;
        } else if (user && !username) {
          return <UsernameForm />;
        } else if (!user) {
          return <SignInButton />;
        }
      })()}
    </main>
  );
}

export default Enter;

function SignInButton() {
  return (
    <button
      className="btn-google"
      onClick={() => signInWithPopup(auth, provider)}
    >
      <img src="/google.png" alt="google" />
      Sign in with Google
    </button>
  );
}

function SignOutButton() {
  return <button onClick={() => signOut(auth)}>Sign Out</button>;
}

function UsernameForm() {
  return <h1>Enter username</h1>;
}
