import React from "react";
import "./aboutUs.scss";
import {
  about_us_bg_line,
  about_us_bg_shadow_1,
  about_us_bg_shadow_2,
  member_photo_1,
} from "../../global/icons/media";

function AboutUs({ setShowBgImg }) {
  setShowBgImg(false);
  return (
    <div className="about_us_container">
      <div className="team_details_container">
        <img src={about_us_bg_line} className="about_us_bg_img" alt="" />
        <img
          src={about_us_bg_shadow_1}
          className="about_us_bg_shadow_1"
          alt=""
        />
        <img
          src={about_us_bg_shadow_2}
          className="about_us_bg_shadow_2"
          alt=""
        />

        <div className="member_details_container">
          <div className="details_text_container">
            <div className="quote_text">
              “People now recognise that having a good performance conversation
              means that something happens as a result.”
            </div>
            <div className="quote_subtext">
              “With Landingfolio, the design team can now build design which
              identifies employees’ career aspirations and goals and from which
              we approach managers and check to see what is happening.”
            </div>
            <div className="member_name">Roopansh Sharma</div>
            <div className="member_designation">Co-founder</div>
          </div>
          <div className="member_img_container">
            <img src={member_photo_1} className="member_photo" alt="" />
          </div>
        </div>

        <div className="member_details_container">
          <div className="member_img_container">
            <img src={member_photo_1} className="member_photo" alt="" />
          </div>
          <div className="details_text_container">
            <div className="quote_text">
              “People now recognise that having a good performance conversation
              means that something happens as a result.”
            </div>
            <div className="quote_subtext">
              “With Landingfolio, the design team can now build design which
              identifies employees’ career aspirations and goals and from which
              we approach managers and check to see what is happening.”
            </div>
            <div className="member_name">Roopansh Sharma</div>
            <div className="member_designation">Co-founder</div>
          </div>
        </div>

        <div className="member_details_container">
          <div className="details_text_container">
            <div className="quote_text">
              “People now recognise that having a good performance conversation
              means that something happens as a result.”
            </div>
            <div className="quote_subtext">
              “With Landingfolio, the design team can now build design which
              identifies employees’ career aspirations and goals and from which
              we approach managers and check to see what is happening.”
            </div>
            <div className="member_name">Roopansh Sharma</div>
            <div className="member_designation">Co-founder</div>
          </div>
          <div className="member_img_container">
            <img src={member_photo_1} className="member_photo" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
