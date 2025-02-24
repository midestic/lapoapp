import styles from "./MenuItems.module.css";
import {
  FaArrowAltCircleLeft,
  FaHome,
  FaHospital,
  FaIdCard,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import {
  IoIosColorFill,
  IoMdCalendar,
  IoMdCard,
  IoMdDoneAll,
  IoMdList,
  IoMdToday,
} from "react-icons/io";
import { NavLink } from "react-router-dom";

let logo = "./images/logo.png";
let card = "./images/card.png";

export default function MenuItems() {
  return (
    <div className={`${styles.sidebar} d-flex flex-column`}>
      <div className={styles.logoDiv}>
        <img className={styles.logo} src={logo} alt="lapo" />
      </div>
      <NavLink to="/" className={styles.navLink}>
        <div className={styles.dash}>
          <small>
            <FaHome /> Dashboard
          </small>
        </div>
      </NavLink>
      <div className={`${styles.itemsDiv} `}>
        <div>
          <small>MAIN MENU</small>
        </div>
        <div>
          <p>
            <FaHospital color="gray" /> Branches
          </p>
        </div>
        <div>
          <p>
            <FaUser color="gray" /> Roles
          </p>
        </div>
        <div>
          <p>
            <FaUsers color="gray" /> Users
          </p>
        </div>
        <div>
          <p>
            <FaIdCard color="gray" /> Scheme
          </p>
        </div>
        <NavLink to="cardprofile" className={styles.navLink}>
          <div>
            <small>
              <IoMdCard color="gray" /> Card Profile
            </small>
          </div>
        </NavLink>
        <NavLink to="cardrequest" className={styles.navLink}>
          <div>
            <small>
              <IoMdCalendar color="gray" /> Card Request
            </small>
          </div>
        </NavLink>
        <div>
          <p>
            <IoMdToday color="gray" /> Stock
          </p>
        </div>
        <div>
          <p>
            <IoMdCard color="gray" /> Cards
          </p>
        </div>
        <div>
          <p>
            <IoMdList color="gray" /> Authorization List
          </p>
        </div>
        <div>
          <p>
            <IoMdDoneAll color="gray" /> Authorization Queue
          </p>
        </div>
        <div>
          <p>
            <IoIosColorFill color="gray" /> Trail
          </p>
        </div>
        <div>
          <p>
            <FaUser color="gray" /> Account
          </p>
        </div>

        <div className={styles.footerContainer}>
          {/* Logout Section */}
          <div className={styles.logout}>
            <FaArrowAltCircleLeft size={18} />
            <span>Logout</span>
          </div>
          {/* Powered By Section */}
          <div className={styles.poweredBy}>
            <p>POWERED BY</p>
            <img src={card} alt="CardInfra Logo" className={styles.logo} />
          </div>
        </div>
      </div>
    </div>
  );
}
