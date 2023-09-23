import React from "react";
import "./page2.scss";
import {
  bg_shadow_3,
  bg_shadow_4,
  bg_shadow_5,
} from "../../global/icons/media";

function Page2() {
  return (
    <div className="page2_container">
      {/* <img src={bg_shadow_3} className="bg_shadow_3" alt="" />
      <img src={bg_shadow_4} className="bg_shadow_4" alt="" />
      <img src={bg_shadow_5} className="bg_shadow_5" alt="" /> */}

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
