import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={"/"}>New Events</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href={"/events"}>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
