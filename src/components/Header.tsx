import Link from "next/link";
import React from "react";
import styles from "../styles/components/header.module.css";

const Header = () => {
  return (
    <div>
      <h4>logo</h4>
      <Link href="/">Accueil </Link>
      <Link href="/about">about </Link>
      <Link href="/projects">projects </Link>
      <Link href="/services">Services </Link>
      <Link href="/contact">contact </Link>
    </div>
  );
};

export default Header;
