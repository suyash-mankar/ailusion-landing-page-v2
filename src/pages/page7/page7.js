import React from "react";
import "./page7.scss";
import {
  roadmap_img,
  milestone_dots,
  roadmap_img_2,
} from "../../global/icons/media";

function Page7() {
  return (
    <div className="page7_container">
      <div className="roadmap_img_container">
        <div className="roadmap_container">
          <div className="heading">AILUSION ROADMAP</div>
          <div className="roadmap">
            <hr className="vertical_roadmap_line" />

            <div className="roadmap_1">
              <img className="milestone_dot" src={milestone_dots} alt="" />
              <div>
                <div className="roadmap_heading">Quarter 2, 2023</div>
                <div className="roadmap_subtext">
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                </div>
              </div>
            </div>
            <div className="roadmap_2">
              <img className="milestone_dot" src={milestone_dots} alt="" />
              <div>
                <div className="roadmap_heading">Quarter 2, 2023</div>
                {/* <div className="roadmap_subtext">
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                </div> */}
              </div>
            </div>
            <div className="roadmap_3">
              <img className="milestone_dot" src={milestone_dots} alt="" />
              <div>
                <div className="roadmap_heading">Quarter 2, 2023</div>
                {/* <div className="roadmap_subtext">
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                </div> */}
              </div>
            </div>
            <div className="roadmap_4">
              <img className="milestone_dot" src={milestone_dots} alt="" />
              <div>
                <div className="roadmap_heading">Quarter 2, 2023</div>
                {/* <div className="roadmap_subtext">
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                </div> */}
              </div>
            </div>
            <div className="roadmap_5">
              <img className="milestone_dot" src={milestone_dots} alt="" />
              <div>
                <div className="roadmap_heading">Quarter 2, 2023</div>
                {/* <div className="roadmap_subtext">
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                </div> */}
              </div>
            </div>
            <div className="roadmap_6">
              <img className="milestone_dot" src={milestone_dots} alt="" />
              <div>
                <div className="roadmap_heading">Quarter 2, 2023</div>
                {/* <div className="roadmap_subtext">
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                </div> */}
              </div>
            </div>
            <div className="roadmap_7">
              <img className="milestone_dot" src={milestone_dots} alt="" />
              <div>
                <div className="roadmap_heading">Quarter 2, 2023</div>
                {/* <div className="roadmap_subtext">
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                  Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan
                  mauris sed purus imperdiet. Nullam sit id diam nunc maecenas.
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="img_container">
          <img className="roadmap_img" src={roadmap_img_2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Page7;
