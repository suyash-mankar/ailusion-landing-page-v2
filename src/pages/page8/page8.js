import React from "react";
import "./page8.scss";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { page8_img, page8_background } from "../../global/icons/media";

function Page8() {
  return (
    <div className="page8_container">
      <div className="left_container">
        <div className="heading">Our team of visionaries</div>
        <div className="subtext">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat.
        </div>
        <div className="btn_container">
          <Button className="about_us_btn">
            About Us <BsArrowRight size={20} />
          </Button>
        </div>
      </div>
      <div className="right_container">
        <img style={{ width: "100%" }} src={page8_img} alt="" />
      </div>
    </div>
  );
}

export default Page8;
