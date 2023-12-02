import { PenSquare, Search } from "lucide-react";

import styles from "./Navbar.module.css";

import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="website logo" className={styles.logo} />
        </Link>
        <div
          className={`${styles.searchContainer} ${
            showSearch ? styles.show : styles.hide
          }`}
        >
          <input type="text" placeholder="Search" className={styles.search} />
          <Search className={styles.searchIcon} />
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button
          onClick={() => setShowSearch((prev) => !prev)}
          className={styles.mobileSearch}
        >
          <Search />
        </button>
        <Link to="/editor" className={`link ${styles.link}`}>
          <PenSquare size={16} />
          <p>Write</p>
        </Link>
        <Link to="/sign-in" className="btnDark btnSmall">
          Sign In
        </Link>
        <Link to="/sign-up" className={`btnLight btnSmall ${styles.btnLight}`}>
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
