import React, { useState } from "react";
import "./page3.scss";
import {
  page3_img,
  bg_shadow_6,
  page3_vr_img,
  page3_description_pointer,
} from "../../global/icons/media";

function Page3() {
  const [showPointerDescription, setShowPointerDescription] = useState({
    pointer1: false,
    pointer2: false,
    pointer3: false,
  });

  return (
    <div className="page3_container">
      {/* <img src={bg_shadow_6} className="bg_shadow_6" alt="" /> */}

      <div className="page3_img_container">
        {/* <img src={page3_img}  style={{ width: "100%" }} alt="" /> */}

        <div className="pointer_description_container_1">
          <div
            className="vr_circle_point_1"
            onMouseEnter={() =>
              setShowPointerDescription({
                pointer1: true,
                pointer2: false,
                pointer3: false,
              })
            }
            onMouseLeave={() =>
              setShowPointerDescription({
                pointer1: false,
                pointer2: false,
                pointer3: false,
              })
            }
          ></div>

          {showPointerDescription.pointer1 && (
            <div className="description_1">
              <img
                src={page3_description_pointer}
                className="page3_description_pointer"
                alt=""
              />
              <div className="pointer_heading">Lorem Ipsum</div>
              <div className="pointer_subtext">
                Lorem ipsum dolor sit amet consectetur. Nam euismod adipiscing
                placerat dolor viverra vestibulum. Neque accumsan integer nibh
                mi quis consectetur dui.
              </div>
            </div>
          )}
        </div>
        <div className="pointer_description_container_2">
          <div
            className="vr_circle_point_2"
            onMouseEnter={() =>
              setShowPointerDescription({
                pointer1: false,
                pointer2: true,
                pointer3: false,
              })
            }
            onMouseLeave={() =>
              setShowPointerDescription({
                pointer1: false,
                pointer2: false,
                pointer3: false,
              })
            }
          ></div>
          {showPointerDescription.pointer2 && (
            <div className="description_2">
              <img
                src={page3_description_pointer}
                className="page3_description_pointer"
                alt=""
              />
              <div className="pointer_heading">Lorem Ipsum</div>
              <div className="pointer_subtext">
                Lorem ipsum dolor sit amet consectetur. Nam euismod adipiscing
                placerat dolor viverra vestibulum. Neque accumsan integer nibh
                mi quis consectetur dui.
              </div>
            </div>
          )}
        </div>
        <div className="pointer_description_container_3">
          <div
            className="vr_circle_point_3"
            onMouseEnter={() =>
              setShowPointerDescription({
                pointer1: false,
                pointer2: false,
                pointer3: true,
              })
            }
            onMouseLeave={() =>
              setShowPointerDescription({
                pointer1: false,
                pointer2: false,
                pointer3: false,
              })
            }
          ></div>
          {showPointerDescription.pointer3 && (
            <div className="description_3">
              <img
                src={page3_description_pointer}
                className="page3_description_pointer"
                alt=""
              />
              <div className="pointer_heading">Lorem Ipsum</div>
              <div className="pointer_subtext">
                Lorem ipsum dolor sit amet consectetur. Nam euismod adipiscing
                placerat dolor viverra vestibulum. Neque accumsan integer nibh
                mi quis consectetur dui.
              </div>
            </div>
          )}
        </div>

        <img src={page3_vr_img} className="page3_vr_img" alt="" />
      </div>
    </div>
  );
}

export default Page3;
