import React, { useEffect, useRef, useState } from "react";
import "./homepage.scss";
import Page1 from "../page1/page1";
import Page2 from "../page2/page2";
import Page3 from "../page3/page3";
import Page4 from "../page4/page4";
import Page5 from "../page5/page5";
import Page6 from "../page6/page6";
import Page7 from "../page7/page7";
import Page8 from "../page8/page8";
import Page9 from "../page9/page9";
import Footer from "../../components/footer/footer";

function HomePage({ setShowBgImg }) {
  setShowBgImg(true);

  const [scrollPosition, setScrollPosition] = useState(0);
  const lineDotRef = useRef(null);

  // Update scroll position when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="homepage">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Footer />

      <div className="line-dot-container">
        <div
          className="line-dot"
          style={{ transform: `translateY(${scrollPosition / 26}px)` }}
          ref={lineDotRef}
        ></div>
      </div>
    </div>
  );
}

export default HomePage;
