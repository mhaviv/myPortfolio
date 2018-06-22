import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import '../css/home.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentWillMount() {
    configureAnchors({ offset: -60, scrollDuration: 1200 });
  }

  render() {
    return (
      <ScrollableAnchor
        id="home"
      >
        <div
          className="homeContainer"
        >
          <div
            id="introContainer"
          >
            <div
              className="introDivs"
            >
              Hi My Name is
              <span
                className="standOut"
              >
                Michael Haviv
              </span>
            </div>
            <div
              className="introDivs"
            >
              I am a
              <span className="standOut">
                Full Stack Software Developer
              </span>
            </div>
            <div
              className="introDivs"
            >
              Check out
              <span className="padPort">
                my
              </span>
              <span
                className="portStandOut"
              >
                <a
                  href="#portfolio"
                  className="linkHeadStyle"
                >
                  Portfolio
                </a>
              </span>
              <span className="padPort2">
                below
              </span>
            </div>
            <div className="mediaLinks">
              <a
                href="https://github.com/mhaviv"
                target="_blank" rel="noopener noreferrer"
                alt="Michael's Github Link"
              >
                <div id="myGithub" className="mediaStyle" alt="Github Link" />
              </a>
              <a
                href="mailto:mhaviv18@gmail.com"
                alt="Michael's Email Link"
                target="_blank" rel="noopener noreferrer"
              >
                <div id="myEmail" className="mediaStyle" alt="Email Link" />
              </a>
              <a
                href="https://www.linkedin.com/in/michaelhaviv/"
                alt="Michael's LinkedIn Link"
                target="_blank" rel="noopener noreferrer"
              >
                <div id="myLinkedIn" className="mediaStyle" alt="LinkedIn Link" />
              </a>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Home;
