import Navbar from "@components/Navbar";

import styles from "./layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <Navbar />
    </div>
  );
}

export default Layout;
