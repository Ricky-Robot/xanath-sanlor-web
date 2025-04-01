import Background from "@components/Background";
import Layout from "@components/Layout";

import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.page}>
      <Layout />
      <Background />
    </div>
  );
}

export default App;
