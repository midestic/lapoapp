import React from "react";
import Modal from "react-modal";
import "./AddFeeModal.css"; // Import the CSS file

export default function AddFee({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-container"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h2>Add Fee</h2>
        <button onClick={onClose} className="close-btn">
          &times;
        </button>
      </div>
      <p>Fill in fee details.</p>

      <div className="form-group">
        <label>Fee Name*</label>
        <input type="text" placeholder="Enter fee name" />
      </div>

      <div className="form-group">
        <label>Value*</label>
        <input type="number" placeholder="0" />
      </div>

      <div className="form-group">
        <label>Currency</label>
        <div className="radio-group">
          <input type="radio" name="currency" id="ngn" checked />
          <label htmlFor="ngn">NGN</label>

          <input type="radio" name="currency" id="usd" />
          <label htmlFor="usd">USD</label>
        </div>
      </div>

      <div className="form-group">
        <label>Fee Frequency</label>
        <div className="radio-group">
          <input type="radio" name="frequency" id="oneOff" checked />
          <label htmlFor="oneOff">One Off</label>

          <input type="radio" name="frequency" id="monthly" />
          <label htmlFor="monthly">Monthly</label>
        </div>
      </div>

      <div className="form-group">
        <label>Fee Impact</label>
        <div className="radio-group">
          <input type="radio" name="impact" id="issuance" checked />
          <label htmlFor="issuance">Issuance</label>

          <input type="radio" name="impact" id="pinReissue" />
          <label htmlFor="pinReissue">Pin Reissue</label>
        </div>
      </div>

      <div className="form-group">
        <label>Account Pad</label>
        <div className="radio-group">
          <input type="radio" name="pad" id="none" checked />
          <label htmlFor="none">None</label>

          <input type="radio" name="pad" id="prefix" />
          <label htmlFor="prefix">Branch Code Prefix</label>

          <input type="radio" name="pad" id="suffix" />
          <label htmlFor="suffix">Branch Code Suffix</label>
        </div>
      </div>

      <div className="form-group">
        <label>Account</label>
        <input type="text" placeholder="Enter account" />
      </div>

      <button className="add-fee-btn">Add Fee</button>
    </Modal>
  );
}
