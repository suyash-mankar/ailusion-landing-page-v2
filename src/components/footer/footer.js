import React from "react";
import "./footer.scss";
import { ailusion_logo_dark } from "../../global/icons/media";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer_container">
      <div className="company_details_links_container">
        <div className="about_company_container">
          <div className="logo_name_container">
            <img src={ailusion_logo_dark} alt="" className="logo_dark_img" />
            <div className="company_name"> AILUSION</div>
          </div>
          <div className="about_company">
            Our company can leverage the power of VR headset to enhance employee
            training, offer virtual property tours, and create engaging
            marketing campaigns, providing customers and clients with a more
            immersive experience.
          </div>
          <div className="social_media_icons_container">
            <div className="social_media_icon">
              <FaTwitter />
            </div>
            <div className="social_media_icon">
              <FaFacebookF />
            </div>
            <div className="social_media_icon">
              <FaInstagram />
            </div>
            <div className="social_media_icon">
              <FaGithub />
            </div>
          </div>
        </div>

        <div className="links_category_container">
          <div className="link_heading">COMPANY</div>
          <div className="link_container">
            <div className="link">About</div>
            <div className="link">Features</div>
            <div className="link">Works</div>
            <div className="link">Career</div>
          </div>
        </div>

        <div className="links_category_container">
          <div className="link_heading">HELP</div>
          <div className="link_container">
            <div className="link">Customer Support</div>
            <div className="link">Delivery Details</div>
            <div className="link">Terms & Conditions</div>
            <div className="link">Privacy Policy</div>
          </div>
        </div>

        <div className="links_category_container">
          <div className="link_heading">RESOURCES</div>
          <div className="link_container">
            <div className="link">Free eBooks</div>
            <div className="link">Development Tutorial</div>
            <div className="link">How to - Blog</div>
            <div className="link">Youtube Playlist</div>
          </div>
        </div>
      </div>

      <hr style={{ border: "1px solid white", marginTop: "5vw" }} />

      <div className="copyright_text">
        © Copyright 2022, All Rights Reserved by AiLusion
      </div>
    </div>
  );
}

export default Footer;
