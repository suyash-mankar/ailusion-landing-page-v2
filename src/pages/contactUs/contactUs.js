import React from "react";
import "./contactUs.scss";
import { Button, Form } from "react-bootstrap";
import {
  contact_us_bg_line,
  contact_us_bg_shadow_1,
  contact_us_bg_shadow_2,
} from "../../global/icons/media";

function ContactUs({ setShowBgImg }) {
  setShowBgImg(false);

  return (
    <div className="contact_us_container">
      <img src={contact_us_bg_line} className="contact_us_bg_line" alt="" />
      <img
        src={contact_us_bg_shadow_1}
        className="contact_us_bg_shadow_1"
        alt=""
      />
      <img
        src={contact_us_bg_shadow_2}
        className="contact_us_bg_shadow_2"
        alt=""
      />

      <div className="contact_us_form_text_container">
        <div className="heading_subtext_container">
          <div className="contact_us_text">Contact Us</div>
          <div className="contact_us_heading">Get in touch</div>
          <div className="contact_us_subtext">
            We’d love to hear from you. Please fill out this form.
          </div>
        </div>

        <div className="contact_us_form_container">
          <Form>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Form.Group
                className="mb-3"
                controlId="ControlInput1"
                style={{ width: "45%" }}
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="ControlInput2"
                style={{ width: "45%" }}
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="ControlInput3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ControlInput4">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="number" placeholder="+1 (555) 000-0000" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Check
              style={{ margin: "20px 0" }}
              type="checkbox"
              id="default-checkbox"
              label="You agree to our friendly privacy policy."
            />

            <Button className="contact_us_form_submit_btn" type="submit">
              Send message
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
