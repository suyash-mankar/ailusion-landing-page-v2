import React from "react";
import "./page9.scss";
import { Button } from "react-bootstrap";

function Page9() {
  return (
    <div className="page9_container">
      <div className="waitlist_container">
        <div className="waitlist_heading">
          Join the future, join the waitlist
        </div>
        <div className="waitlist_inputs_container">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Email address" />
          <Button variant="dark" className="subscribe_now_btn">
            Subscribe Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page9;
