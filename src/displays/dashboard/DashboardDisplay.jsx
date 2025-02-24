import { FaCalendar } from "react-icons/fa";
import styles from "./DashboardDisplay.module.css";
import QuickAccess from "../../sections/dashboardsections/quickAccess/QuickAccess";
import Analytics from "../../sections/dashboardsections/analytics/Analytics";
import ChartSpace from "../../sections/dashboardsections/charts/chartSpace/ChartSpace";

export default function DashboardDisplay() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return (
    <div className={`${styles.dashDisplayComp} `}>
      <div className={`${styles.dashDisplay} row`}>
        <div className={`${styles.mainDisplay} container`}>
          <div className={`${styles.dashDisplayHeader} col-12`}>
            <div>
              <h5>Hi Nazeer, what would you like to do today?</h5>
              <small>last login : 26/11/2024 14:39:58</small>
            </div>
            <div className={`${styles.calender} `}>
              <small>
                <FaCalendar /> Today
              </small>
              <small className={styles.todayDate}>
                <b>
                  {day}/ {month} /{year}
                </b>
              </small>
            </div>
          </div>
        </div>

        <QuickAccess />

        <Analytics />

        <ChartSpace />
      </div>
    </div>
  );
}
