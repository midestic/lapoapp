import React from "react";
import styles from "./CardProfile.module.css";
import { IoMdAdd, IoMdTrash } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const CardProfile = () => {
  const data = [
    {
      name: "Versa-1",
      currency: "NGN",
      expiration: "42 months",
      binPrefix: "504024",
      dateCreated: "11/10/2024 23:25:05",
    },
    {
      name: "Versa-1",
      currency: "NGN",
      expiration: "42 months",
      binPrefix: "504024",
      dateCreated: "11/10/2024 23:25:05",
    },
    {
      name: "Versa-1",
      currency: "NGN",
      expiration: "42 months",
      binPrefix: "504024",
      dateCreated: "11/10/2024 23:25:05",
    },
  ];

  return (
    <div className={styles.cardRequestContainer}>
      <h2>Card Profile</h2>
      <p>View and attend to card requests here.</p>
      <div className={styles.searchCont}>
        <div className={styles.searchDiv}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search by card name"
          />{" "}
        </div>
        <NavLink to="/createprofile">
          <button className={styles.addProfileButton}>
            <IoMdAdd /> <small>Add profile</small>
          </button>
        </NavLink>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.cardTable}>
          <thead>
            <tr>
              <th>Card Name</th>
              <th>Currency</th>
              <th>Expiration</th>
              <th>Bin Prefix</th>
              <th>Date Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.currency}</td>
                <td>{item.expiration}</td>
                <td>{item.binPrefix}</td>
                <td>{item.dateCreated}</td>
                <td className={styles.actions}>
                  <IoMdTrash className={styles.icon} title="Delete" />
                  <FaEdit className={styles.icon} title="Edit" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardProfile;
