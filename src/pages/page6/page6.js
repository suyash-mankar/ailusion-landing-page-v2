import React from "react";
import "./page6.scss";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "react-bootstrap";
import {
  milestone_dots,
  milestone1_icon,
  milestone2_icon,
  milestone3_icon,
  milestone4_icon,
  milestone5_icon,
} from "../../global/icons/media";

function Page6() {
  return (
    <div className="page6_container">
      <div className="heading_btn_container">
        <div className="heading_subtext_container">
          <div className="heading">Solving Real-World Challenges</div>
          <div className="subtext">
            Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan mauris
            sed purus imperdiet. Nullam sit id diam nunc maecenas.
          </div>
        </div>
        <div className="check_now_btn_container">
          <Button className="check_now_btn">
            Check Now <BsArrowRight size={20} />
          </Button>
        </div>
      </div>
      <div className="milestone_container">
        <hr className="milestone_line" />
        <div className="milestone_1">
          <img className="milestone_dot" src={milestone_dots} alt="" />
          <div className="milestone_icon_container">
            <img className="milestone_icon" src={milestone1_icon} alt="" />
          </div>
          <div className="milestone_heading">Integration</div>
          <div className="milestone_subtext">
            Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan mauris
            sed purus imperdiet. Nullam sit id diam nunc maecenas.
          </div>
        </div>

        <div className="milestone_2">
          <img className="milestone_dot" src={milestone_dots} alt="" />
          <div className="milestone_icon_container">
            <img className="milestone_icon" src={milestone2_icon} alt="" />
          </div>
          <div className="milestone_heading">Ergonomic</div>
          <div className="milestone_subtext">
            Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan mauris
            sed purus imperdiet. Nullam sit id diam nunc maecenas.
          </div>
        </div>

        <div className="milestone_3">
          <img className="milestone_dot" src={milestone_dots} alt="" />
          <div className="milestone_icon_container">
            <img className="milestone_icon" src={milestone3_icon} alt="" />
          </div>
          <div className="milestone_heading">Affordable</div>
          <div className="milestone_subtext">
            Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan mauris
            sed purus imperdiet. Nullam sit id diam nunc maecenas.
          </div>
        </div>

        <div className="milestone_4">
          <img className="milestone_dot" src={milestone_dots} alt="" />
          <div className="milestone_icon_container">
            <img className="milestone_icon" src={milestone4_icon} alt="" />
          </div>
          <div className="milestone_heading">Premium</div>
          <div className="milestone_subtext">
            Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan mauris
            sed purus imperdiet. Nullam sit id diam nunc maecenas.
          </div>
        </div>

        <div className="milestone_5">
          <img className="milestone_dot" src={milestone_dots} alt="" />
          <div className="milestone_icon_container">
            <img className="milestone_icon" src={milestone5_icon} alt="" />
          </div>
          <div className="milestone_heading">Vast Content</div>
          <div className="milestone_subtext">
            Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan mauris
            sed purus imperdiet. Nullam sit id diam nunc maecenas.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page6;
