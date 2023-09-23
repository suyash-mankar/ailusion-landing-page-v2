import React from "react";
import "./page3.scss";
import { page3_img, bg_shadow_6 } from "../../global/icons/media";

function Page3() {
  return (
    <div className="page3_container">
      {/* <img src={bg_shadow_6} className="bg_shadow_6" alt="" /> */}

      <div className="page3_img_container">
        <img src={page3_img}  style={{ width: "100%" }} alt="" />
      </div>
    </div>
  );
}

export default Page3;
