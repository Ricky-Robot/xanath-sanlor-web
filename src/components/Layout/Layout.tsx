import Navbar from "@components/Navbar";

import styles from "./layout.module.css";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <div className={styles.navbarArea}>
        <Navbar />
      </div>
      <div className={styles.contentArea}>{children}</div>
    </div>
  );
}

export default Layout;
