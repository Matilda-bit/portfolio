import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/ScrollService";

const Footer: React.FC = () => {
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default Footer;