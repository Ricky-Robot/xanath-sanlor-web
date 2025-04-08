import Layout from "@components/Layout";

import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.page}>
      <Layout>
        <div className={styles.introduction}>
          Hola, soy Xanath Sanchez Lorenzana.
        </div>
      </Layout>
    </div>
  );
}

export default App;
