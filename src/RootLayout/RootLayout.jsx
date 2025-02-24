import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";
import MenuItems from "../components/menuItems";
import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { FaBell, FaUser, FaBars, FaTimes } from "react-icons/fa";
import DashboardDisplay from "../displays/dashboard/DashboardDisplay";

export default function RootLayout() {
  const [header, setHeader] = useState({
    icon: <IoMdHome />,
    text: "Dashboard",
  });

  const [display, setDisplay] = useState(<DashboardDisplay />);
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
          <MenuItems />
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
