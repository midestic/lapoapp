import {
  IoMdArrowDropright,
  IoMdCard,
  IoMdCreate,
  IoMdReturnRight,
  IoMdWallet,
} from "react-icons/io";
import styles from "./QuickAccess.module.css";
import { FaIdCard, FaWallet } from "react-icons/fa";

export default function QuickAccess() {
  return (
    <div className={`${styles.quickAccessComp} container  border`}>
      <small>
        <b>Your Quick Access</b>
      </small>

      <div
        className={`${styles.wrapper} row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2`}
      >
        <div className="col ">
          <div className={`${styles.col} p-2 col border`}>
            <small className={styles.iconCircle}>
              <FaWallet />
            </small>
            <small> Manage a Card </small>
            <small>
              <IoMdReturnRight />
            </small>
          </div>
        </div>
        <div className="col ">
          <div className={`${styles.col} p-2 col border`}>
            <small className={styles.iconCircle}>
              <IoMdCard />
            </small>
            <small>Issue Instant Card</small>
            <small>
              <IoMdReturnRight />
            </small>
          </div>
        </div>
        <div className="col ">
          <div className={`${styles.col} p-2 col border`}>
            <small className={styles.iconCircle}>
              <IoMdCreate />
            </small>
            <small>Issue Personalized Card</small>
            <small>
              <IoMdReturnRight />
            </small>
          </div>
        </div>
        <div className="col ">
          <div className={`${styles.col} p-2 col border`}>
            <small className={styles.iconCircle}>
              <FaIdCard />
            </small>
            <small>Review Card Requests</small>
            <small>
              <IoMdReturnRight />
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
