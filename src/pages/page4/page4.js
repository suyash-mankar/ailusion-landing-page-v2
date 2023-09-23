import React from "react";
import "./page4.scss";
import { page4_img } from "../../global/icons/media";

function Page4() {
  return (
    <div className="page4_container">
      <div className="page4_img_container">
        <img src={page4_img} style={{ width: "65%" }} alt="" />
      </div>
      <div className="page4_heading">
        CREATING AUGMENTED REALITY EXPERIENCE HAS NEVER BEEN EASY
      </div>
      <div className="page4_subtext">
        In last few decades, There's been a cultural shift with AR/VR as it
        offers transformative experiences, but beyond the reach of many!!!
      </div>
    </div>
  );
}

export default Page4;
