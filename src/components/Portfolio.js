import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import '../css/portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    configureAnchors({ offset: -60, scrollDuration: 1200 });
  }

  render() {
    return (
      <div
        className="myPortfolioContainer"
      >
        <ScrollableAnchor
          id="portfolio"
        >
          <div
            className="portfolioProjContainer"
            id="tunesendContainer"
          >
            <img
              src={require("../images/TuneSendMockIphone.png")}
              className="iphoneSize"
              alt="TuneSend IOS keyboard"
            />
            <div className="portTextContainer">
              <div
                className="nameSize"
                id="tunesendSize"
              >
                <span className="titleStyle">
                  Tune
                </span>
                <span id="sendColor">
                  Send
                </span>
                <li className="contentStyle">
                  A fun musical messaging IOS keyboard extension that inspires musical creativity
                </li>
                <li
                  className="contentStyle tuneGroup"
                >
                  <div
                    className="tech"
                  >
                    Technologies:
                  </div>
                  <img
                    src={require("../images/swift.png")}
                    className="skillPics"
                    alt="Swift box"
                  />
                  <img
                    src={require("../images/react-native.png")}
                    className="skillPics"
                    alt="React Native box"
                  />
                  <img
                    src={require("../images/javascript.png")}
                    className="skillPics"
                    alt="Javascript box"
                  />
                </li>
                <a
                  href="https://www.youtube.com/watch?v=V_lDM6AImMk&feature=youtu.be"
                  className="linkHeadStyle2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="visitButton"
                  >
                    VIEW DEMO
                  </button>
                </a>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
        <div
          className="portfolioProjContainer"
          id="hallowgramContainer"
        >
          <div
            className="portTextContainer"
            id="hallowTextContainer"
          >
            <div
              className="nameSize"
              id="hallowSize"
            >
              <span id="hgStyle">Hallowgram</span>
              <li
                className="contentStyle"
                id="hallow-liStyle"
              >
                A Halloween themed Instagram clone application
              </li>
              <li
                className="contentStyle skillPics"
              >
                <div
                  className="tech hallowTech"
                >
                  Technologies:
                </div>
                <div className="imgGroup hallowGroup">
                  <img
                    src={require("../images/javascript.png")}
                    className="skillPics hallowPic"
                    alt="Javascript box"
                  />
                  <img
                    src={require("../images/nodejs.png")}
                    className="skillPics hallowPic"
                    alt="Node.js box"
                  />
                  <img
                    src={require("../images/aws.png")}
                    className="skillPics hallowPic"
                    alt="AWS box"
                  />
                  <img
                    src={require("../images/postgreSQL.png")}
                    className="skillPics hallowPic"
                    alt="PostgreSQL box"
                  />
                  <img
                    src={require("../images/css.png")}
                    className="skillPics hallowPic"
                    alt="CSS box"
                  />
                </div>
              </li>
              <a
                href="https://hallowgram.herokuapp.com/"
                className="linkHeadStyle2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="visitButton"
                  id="hallowButton"
                >
                  VISIT WEBSITE
                </button>
              </a>
            </div>
          </div>
          <img
            src={require("../images/HallowgramSite.png")}
            className="computerSize"
            alt="Hallowgram app"
          />
        </div>
        <div
          className="portfolioProjContainer"
          id="musiStreamContainer"
        >
          <img
            src={require("../images/musiStreamSite.png")}
            className="computerSize2"
            alt="MusiStream app"
          />
          <div
            className="portTextContainer2"
            id="musiTextContainer"
          >
            <div
              className="nameSize"
              id="musiSize"
            >
              <span id="msStyle">MusiStream</span>
              <li
                className="contentStyle"
                id="musi-liStyle"
              >
                A music streaming application that uses Soundcloud to stream music
              </li>
              <li
                className="contentStyle skillPics"
              >
                <div
                  className="tech musiTech"
                >
                  Technologies:
                </div>
                <div className="imgGroup musiGroup">
                  <img
                    src={require("../images/javascript.png")}
                    className="skillPics musiPic"
                    alt="Javascript box"
                  />
                  <img
                    src={require("../images/Bootstrap.png")}
                    className="skillPics musiPic"
                    alt="Bootstrap box"
                  />
                  <img
                    src={require("../images/css.png")}
                    className="skillPics musiPic"
                    alt="CSS box"
                  />
                  <img
                    src={require("../images/html.png")}
                    className="skillPics musiPic"
                    alt="HTML box"
                  />
                </div>
              </li>
              <a
                href="https://musistream.herokuapp.com/"
                className="linkHeadStyle2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="visitButton"
                  id="musiButton"
                >
                    VISIT WEBSITE
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="portfolioProjContainer"
          id="mfoContainer"
        >
          <div className="portTextContainer2">
            <div
              className="nameSize"
              id="marvelFaceoff"
            >
              Marvel
              <div className="faceoffFont">
                FACE OFF
              </div>
              <li
                className="contentStyle"
                id="mfo-liStyle"
              >
                An icebreaker game where players answer sets of
                random questions about Marvel superheroes
              </li>
              <li
                className="contentStyle skillPics"
              >
                <div
                  className="tech marvelTech"
                >
                  Technologies:
                </div>
                <div className="imgGroup">
                  <img
                    src={require("../images/react.png")}
                    className="skillPics marvelPic"
                    alt="React box"
                  />
                  <img
                    src={require("../images/javascript.png")}
                    className="skillPics marvelPic"
                    alt="Javascript box"
                  />
                  <img
                    src={require("../images/css.png")}
                    className="skillPics marvelPic"
                    alt="CSS box"
                  />
                </div>
              </li>
              <a
                href="https://marvel-face-off.herokuapp.com/"
                className="linkHeadStyle2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="visitButton"
                  id="mfoButton"
                >
                    VISIT WEBSITE
                </button>
              </a>
            </div>
          </div>
          <img
            src={require("../images/MFOSite.png")}
            className="computerSize"
            alt="Marvel Faceoff app"
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
