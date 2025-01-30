import React from "react";


interface ScrollHeadingProps {
  title: string;
  subHeading?: string;
}

const ScrollHeading: React.FC<ScrollHeadingProps> = (props) => {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>{props.title}</span>
      </div>
      {props.subHeading ? (
        <div className="screen-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="heading-seperator">
        <div className="seperator-line"></div>
        <div className="seperator-blob">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ScrollHeading;
