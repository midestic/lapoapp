import React, { useState } from "react";
import styles from "./CreateProfile.module.css"; // Import the CSS module

import AddFee from "../addFee/AddFee";

const CreateProfile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.createProfileContainer}>
      <h2>Create Profile</h2>
      <p>Fill in profile details and add card fee.</p>
      {/* Profile Details Section */}
      <div className={styles.profileDetails}>
        <div className={styles.divOne}>
          <div className={styles.formGroup}>
            <label>Card Name*</label>
            <input type="text" placeholder="Enter card name" />
          </div>

          <div className={styles.formGroup}>
            <label>Card Scheme*</label>
            <select>
              <option>Verve</option>
              <option>MasterCard</option>
              <option>Visa</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Description</label>
            <input type="text" placeholder="" />
          </div>

          <div className={styles.formGroup}>
            <label>Branch Blacklist</label>
            <select>
              <option>Head Office</option>
              <option>Branch 1</option>
              <option>Branch 2</option>
            </select>
          </div>
        </div>
        <div className={styles.divTwo}>
          <div className={styles.formGroup}>
            <label>Bin Profile*</label>
            <input type="text" placeholder="0000000000" />
          </div>

          <div className={styles.formGroup}>
            <label>Expiration*</label>
            <input type="number" placeholder="0" />
          </div>

          <div className={styles.formGroup}>
            <label>Currency*</label>
            <select>
              <option>NGN</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>{" "}
      </div>
      {/* Fees Section */}
      <AddFee isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <div className={styles.feesSection}>
        <div className={styles.feesHeader}>
          <h3>Fees</h3>
          <button
            onClick={() => setModalOpen(true)}
            className={styles.addFeeBtn}
          >
            + Add Fee
          </button>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Frequency</th>
              <th>Currency</th>
              <th>Time</th>
              <th>Account Paid</th>
              <th>Account</th>
            </tr>
          </thead>
          <tbody>{/* Empty Table */}</tbody>
        </table>
      </div>
      {/* Create Profile Button */}
      <div className={styles.cBtnDiv}>
        <button className={styles.createProfileBtn}>Create Profile</button>
      </div>{" "}
    </div>
  );
};

export default CreateProfile;
