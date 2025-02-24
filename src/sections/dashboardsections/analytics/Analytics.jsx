import styles from "./Analytics.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  IoIosCash,
  IoLogoAndroid,
  IoMdArrowUp,
  IoMdWallet,
} from "react-icons/io";

export default function Analytics() {
  return (
    <div className={`${styles.analyticsComp}`}>
      <div className={styles.headingContainer}>
        <small className={`${styles.heading}`}>Analytics</small>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
          <div className="col">
            <div className={`${styles.wrap} border col`}>
              <div className="bg-white">
                <small>
                  <IoMdWallet />
                </small>
                <br />
                <small>Total Active cards</small>
              </div>

              <div
                className={`${styles.infoDiv} bg-white d-flex flex-row justify-content-between align-items-center`}
              >
                <span>
                  <h2>26,478</h2>
                </span>

                <span>
                  <small className={`${styles.green} bg-gray rounded`}>
                    <IoMdArrowUp /> +90%
                  </small>
                  <small>this month</small>
                </span>
              </div>
            </div>{" "}
          </div>

          <div className="col">
            <div className={`${styles.wrap} border col`}>
              <div className="bg-white">
                <small>
                  <IoMdWallet />
                </small>
                <br />
                <small>Total Personalized Cards</small>
              </div>

              <div
                className={`${styles.infoDiv} bg-white d-flex flex-row justify-content-between align-items-center`}
              >
                <span>
                  <h2>15,703</h2>
                </span>

                <span>
                  <small className={`${styles.green} bg-gray rounded`}>
                    <IoMdArrowUp /> +8.5%
                  </small>
                  <small>this month</small>
                </span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className={`${styles.wrap} border col`}>
              <div className="bg-white">
                <small>
                  <IoIosCash />
                </small>
                <br />
                <small>Today's Revenue</small>
              </div>

              <div
                className={`${styles.infoDiv} bg-white d-flex flex-row justify-content-between align-items-center`}
              >
                <span>
                  <h2>#9.3M</h2>
                </span>

                <span>
                  <small className={`${styles.green} bg-gray rounded`}>
                    <IoMdArrowUp /> +6%
                  </small>
                  <small>this month</small>
                </span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className={`${styles.wrap} border col`}>
              <div className="bg-white">
                <small>
                  <IoLogoAndroid />
                </small>
                <br />
                <small>Today's Revenue</small>
              </div>

              <div
                className={`${styles.infoDiv} bg-white d-flex flex-row justify-content-between align-items-center`}
              >
                <span>
                  <h2>38</h2>
                </span>

                <span>
                  <small className={`${styles.orange}  bg-gray rounded`}>
                    Requires attention
                  </small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
