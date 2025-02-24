import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./RecentCardRequest.module.css";

export default function RecentCardRequest() {
  return (
    <div className={`${styles.tableCont}  container `}>
      <table className={`table border text-center ${styles.noVerticalBorders}`}>
        <thead>
          <tr className={styles.tableHeading}>
            <th>
              <small>Branch</small>
            </th>
            <th>
              <small>Card Type</small>
            </th>
            <th>
              <small>Quantity</small>
            </th>
            <th>
              <small>Status</small>
            </th>
            <th>
              <small>Date</small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <small>Corporate</small>
            </td>
            <td>
              <small>Instant</small>
            </td>
            <td>
              <small>10</small>
            </td>
            <td>
              <small>Ready</small>
            </td>
            <td>
              <small>View</small>
            </td>
          </tr>
          <tr>
            <td>
              <small>Corporate</small>
            </td>
            <td>
              <small>Personalized</small>
            </td>
            <td>
              <small>10</small>
            </td>
            <td>
              <small>In progress</small>
            </td>
            <td>
              <small>View</small>
            </td>
          </tr>
          <tr>
            <td>
              <small>Corporate</small>
            </td>
            <td>
              <small>Personalized</small>
            </td>
            <td>
              <small>10</small>
            </td>
            <td>
              <small>Acknowledged</small>
            </td>
            <td>
              <small>View</small>
            </td>
          </tr>
          <tr>
            <td>
              <small>Corporate</small>
            </td>
            <td>
              <small>Instant</small>
            </td>
            <td>
              <small>10</small>
            </td>
            <td>
              <small>Pending</small>
            </td>
            <td>
              <small>View</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
