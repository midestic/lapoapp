import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RequestCard.css";

export default function RequestCard() {
  return (
    <div className="container mt-4 card-request-container">
      <div className="mb-3">
        <h4 className="card-request-title">Card Request</h4>
        <small className="card-request-subtitle">
          View and Attend to card requests here
        </small>
      </div>
      <div className="mb-3">
        {" "}
        <input type="text" />
      </div>
      <div className="tab-div">
        <table className="table table-bordered text-center card-request-table">
          <thead className="thead-light">
            <tr style={{ backgroundColor: "#f1f7ff" }}>
              <th>Branch</th>
              <th>Initiator</th>
              <th>Quantity</th>
              <th>Batch</th>
              <th>Date Requested</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                <td>Corporate</td>
                <td>Root User</td>
                <td>10</td>
                <td>847264905</td>
                <td>11/14/2024 10:27:43</td>
                <td>
                  <span className="badge badge-success">Ready</span>
                </td>
                <td>
                  <button className="btn btn-primary btn-sm">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
