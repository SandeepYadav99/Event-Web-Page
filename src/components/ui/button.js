import Link from "next/link";
import styles from "./button.module.css";
import React from "react";

const Button = ({onClick, link, children }) => {
  if(link){
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    );
  }
  return (
    <button  onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
