import { useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router";

import styles from "./navbar.module.css";

export default function Navbar() {
  const sections = ["Arte", "Blog", "Contacto"];
  const [isBurguerOpen, setDisplayNavList] = useState(false);

  const handleClickBurguer = () => {
    setDisplayNavList(!isBurguerOpen);
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navTitle}>
        <NavLink to="/">Xanath</NavLink>
      </h1>

      <button className={styles.navBurguer} onClick={handleClickBurguer}>
        Menu
      </button>

      <ul
        className={classNames(
          styles.navList,
          isBurguerOpen && styles.navBurguerOpen
        )}
      >
        {sections.map((section) => (
          <NavLink key={section} to={`/${section.toLowerCase()}`}>
            <li className={styles.navItem}>{section}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
