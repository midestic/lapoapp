import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";
import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { FaBell, FaUser, FaBars, FaTimes } from "react-icons/fa";
import DashboardDisplay from "../displays/dashboard/DashboardDisplay";
import ItemsMenu from "../components/itemsmenu/ItemsMenu";

export default function RootLayout() {
  const [header, setHeader] = useState({
    icon: <IoMdHome />,
    text: "Dashboard",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`${styles.rootLayout}`}>
      <div className={`${styles.dashboard}`}>
        <div
          className={`${styles.sideBoard} ${sidebarOpen ? styles.open : ""}`}
        >
          <ItemsMenu toggleSidebar={toggleSidebar} />
          {sidebarOpen && (
            <button className={styles.closeButton} onClick={toggleSidebar}>
              <FaTimes />
            </button>
          )}
        </div>
        <div className={`${styles.rightBoard}`}>
          <div className={`${styles.boardHeader} border`}>
            <button className={styles.toggleButton} onClick={toggleSidebar}>
              <FaBars />
            </button>
            <div className={styles.homeDash}>
              <small>
                {header.icon} {header.text}
              </small>
            </div>
            <div className={styles.infoBox}>
              <input type="text" placeholder="search" />
              <small>
                <FaBell />
              </small>
              <small>
                <FaUser />
              </small>
            </div>
          </div>
          <div className={`${styles.displayBox}`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
