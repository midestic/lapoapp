import RecentCardRequest from "../cardRequest/RecentCardRequest";
import CardStatus from "../cardStatus/CardStatus";
import MonthlyBarChart from "../monthlyInsurance/MonthlyBarChart";
import WeekIncome from "../weekIncome/WeekIncome";
import styles from "./ChartSpace.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ChartSpace() {
  return (
    <div className={`${styles.space} `}>
      <div className="row row-cols-1 row-cols-md-2 g-2 ">
        <div className={`${styles.monthly}col border`}>
          <MonthlyBarChart />
        </div>
        <div className={`${styles.cardReq} col`}>
          <RecentCardRequest />
        </div>
        <div className={`${styles.weekly} border col`}>
          <WeekIncome />
        </div>
        <div className={`${styles.cardStatus} col`}>
          <CardStatus />
        </div>
      </div>
    </div>
  );
}
