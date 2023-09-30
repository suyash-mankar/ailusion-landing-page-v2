import React from "react";
import "./page3.scss";
import { page3_img, bg_shadow_6, page3_vr_img } from "../../global/icons/media";

function Page3() {
  return (
    <div className="page3_container">
      {/* <img src={bg_shadow_6} className="bg_shadow_6" alt="" /> */}

      <div className="page3_img_container">
        {/* <img src={page3_img}  style={{ width: "100%" }} alt="" /> */}
        <div className="vr_circle_point_1"></div>
        <div className="vr_circle_point_2"></div>
        <div className="vr_circle_point_3"></div>

        <img src={page3_vr_img} className="page3_vr_img" alt="" />
      </div>
    </div>
  );
}

export default Page3;
