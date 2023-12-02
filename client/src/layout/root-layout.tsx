import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar.component";

import styles from "./root-layout.module.css";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
