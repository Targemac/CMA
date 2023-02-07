import React from "react";
import "./AccountCreated.css";
import { FaCheckCircle } from "react-icons/fa";

const AccountCreated = () => {
  return (
    <div className="account-created-wrapper">
      <div className="account-created-row-1">
        <FaCheckCircle className="created-icon" /> Account Created
      </div>
      <div className="account-created-row-2">
        Thank you for signing up with us, a verification email has been sent to
        &nbsp;
        <strong>example@mail.com</strong> , click the link in your email to
        verify your account.
      </div>
      <div className="account-created-row-3">
        Redirecting to login page in 10s
      </div>
    </div>
  );
};

export default AccountCreated;
