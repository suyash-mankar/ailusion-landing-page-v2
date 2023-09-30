import React from "react";
import "./page2.scss";
import {
  bg_shadow_3,
  bg_shadow_4,
  bg_shadow_5,
  page2_bg_img_1,
  page2_bg_img_2,
  video_icon,
} from "../../global/icons/media";

function Page2() {
  return (
    <div className="page2_container">
      {/* <img src={bg_shadow_3} className="bg_shadow_3" alt="" />
      <img src={bg_shadow_4} className="bg_shadow_4" alt="" />
      <img src={bg_shadow_5} className="bg_shadow_5" alt="" /> */}

      <img src={page2_bg_img_1} className="page2_bg_img_1" alt="" />
      <img src={page2_bg_img_2} alt="" className="page2_bg_img_2" />

      <div className="video_container">
        <img src={video_icon} className="video_icon" alt="" />
      </div>

      <div className="page2_heading">
        <div className="heading_part1">
          FUTURE
          <div className="heading_part1_subtext">
            Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan mauris
            sed purus imperdiet. Nullam sit id diam nunc maecenas.
          </div>
        </div>
        <div className="heading_part2">
          <div className="heading_part2_subtext">
            Lorem ipsum dolor sit amet consectetur. Sed lacus a accumsan mauris
            sed purus imperdiet. Nullam sit id diam nunc maecenas.
          </div>
          IS HERE
        </div>
      </div>
    </div>
  );
}

export default Page2;
