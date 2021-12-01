import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../lib/context";

function Navbar() {
  const { user, username } = useContext(UserContext);
  // const { user, username } = {};
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Wirte Post</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} alt="user" />
              </Link>
            </li>
          </>
        )}
        {!username && (
          <>
            <li>
              <Link href="enter">
                <button className="btn-blue">Log in</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
