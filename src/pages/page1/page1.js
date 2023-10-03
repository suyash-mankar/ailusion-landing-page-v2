import React from "react";
import "./page1.scss";
import {
  bg_shadow_1,
  bg_shadow_2,
  page1_arrow_img,
  page1_bg_line,
  page1_zigzag_line,
  vr_headset_img,
  vr_bg_shadow,
} from "../../global/icons/media";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();

  return (
    <div className="page1_container">
      <img src={page1_bg_line} className="bg_line" alt="" />
      {/* <img src={bg_shadow_1} className="bg_shadow_1" alt="" />
      <img src={bg_shadow_2} className="bg_shadow_2" alt="" /> */}

      <div className="page1_left_container">
        <div className="page1_heading">
          Immerse Yourself in a New Reality with Our AR VR Set
        </div>
        <div className="page1_subtext">
          Join our waitlist to get exclusive access to our cutting-edge AR VR
          Set. Dive into immersive worlds, explore new dimensions, and redefine
          your reality.
        </div>

        <Button
          className="join_the_future_btn"
          onClick={() => {
            navigate("/test");
          }}
        >
          Join the future <BsArrowRight />
        </Button>

        <img src={page1_zigzag_line} className="zigzag_line_img" alt="" />
      </div>
      <div className="page1_right_container">
        <div className="page1_img_container">
          <img src={vr_headset_img} alt="page1_img" className="page1_img" />
          <img src={vr_bg_shadow} className="vr_bg_shadow" alt="" />
        </div>
        <img src={page1_arrow_img} className="page1_arrow_img" alt="" />
      </div>
    </div>
  );
}

export default Page1;
