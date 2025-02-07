import React from "react";

import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Feedback.css";
import maleProfile from "../../../src/assets/Feedback/profileImage/0.png";
import femaleProfile from "../../../src/assets/Feedback/profileImage/1.png";
import shape from "../../../src/assets/Feedback/shape-bg.png";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import Catalog from "./catalog/Catalog";

interface FeedbackProps {
  screenName: string;
  id: string;
}

const Feedback: React.FC<FeedbackProps> = (props) => {
  let fadeInScreenHandler = (screen: string) => {
    if (screen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    // <div className="testimonial-section fade-in" id={props.id || ""}>
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"Words from My Former Managers & Teammates"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <Catalog>
            {/* <div className="row"> */}
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    text will be added soon, text will be added soon, text will be added soon
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={femaleProfile} alt="no internet connection"></img>
                  <h5>Some_Name</h5>
                  <p>role title</p>
                </div>
              </div>
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    text will be added soon, text will be added soon, text will be added soon
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={maleProfile} alt="no internet connection"></img>
                  <h5>Some_Name</h5>
                  <p>role title</p>
                </div>
              </div>
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    text will be added soon, text will be added soon, text will be added soon
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={femaleProfile} alt="no internet connection"></img>
                  <h5>Some_Name</h5>
                  <p>role title</p>
                </div>
              </div>
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    text will be added soon, text will be added soon, text will be added soon
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={maleProfile} alt="no internet connection"></img>
                  <h5>Some_Name</h5>
                  <p>role title</p>
                </div>
              </div>
          </Catalog>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}

export default Feedback