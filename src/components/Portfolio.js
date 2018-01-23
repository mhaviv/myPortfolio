import React, { Component } from 'react';
import "../css/portfolio.css";

class Portfolio extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	render() {
		return(
			<div
				id="myPortfolioContainer"
			>
				<div
					className="portfolioProjContainer"
					id="tunesendContainer"
				>
					<img
						src={require("../images/TuneSendMockIphone.png")}
						className="iphoneSize"
					/>
					<div className="portTextContainer">
						<div
							className="nameSize"
							id="tunesendSize"
						>
							<span class="titleStyle">
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
								/>
								<img
									src={require("../images/react-native.png")}
									className="skillPics"
								/>
								<img
									src={require("../images/javascript.png")}
									className="skillPics"
								/>
							</li>
							<button
								className="visitButton"
							>
								DOWNLOAD APP
							</button>
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
								An icebreaker game where players answer sets of random questions about Marvel superheroes
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
									/>
									<img
										src={require("../images/javascript.png")}
										className="skillPics marvelPic"
									/>
									<img
										src={require("../images/css.png")}
										className="skillPics marvelPic"
									/>
								</div>
							</li>
							<button
								className="visitButton"
								id="mfoButton"
							>
								VISIT WEBSITE
							</button>
						</div>
					</div>
					<img
						src={require("../images/MFOSite.png")}
						className="computerSize"
					/>
				</div>
				<div
					className="portfolioProjContainer"
					id="hallowgramContainer"
				>
					<img
						src={require("../images/HallowgramSite.png")}
						className="computerSize2"
					/>
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
									/>
									<img
										src={require("../images/nodejs.png")}
										className="skillPics hallowPic"
									/>
									<img
										src={require("../images/aws.png")}
										className="skillPics hallowPic"
									/>
									<img
										src={require("../images/postgreSQL.png")}
										className="skillPics hallowPic"
									/>
									<img
										src={require("../images/css.png")}
										className="skillPics hallowPic"
									/>
								</div>
							</li>
							<button
								className="visitButton"
								id="hallowButton"
							>
								VISIT WEBSITE
							</button>
						</div>
					</div>
				</div>
				<div
					className="portfolioProjContainer"
					id="musiStreamContainer"
				>
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
									/>
									<img
										src={require("../images/Bootstrap.png")}
										className="skillPics musiPic"
									/>
									<img
										src={require("../images/css.png")}
										className="skillPics musiPic"
									/>
									<img
										src={require("../images/html.png")}
										className="skillPics musiPic"
									/>
								</div>
							</li>
							<button
								className="visitButton"
								id="musiButton"
							>
								VISIT WEBSITE
							</button>
						</div>
					</div>
					<img
						src={require("../images/musiStreamSite.png")}
						className="computerSize"
					/>
				</div>
			</div>
		)
	}
}

export default Portfolio;