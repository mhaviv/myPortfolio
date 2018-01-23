import React, { Component } from 'react';
import "../css/about.css";

class About extends Component {
	constructor() {
	  super();
	
	  this.state = {};
	}

	render() {
		return (
			<div id="aboutContainer">
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
							id="portStandOut"
						>
							Portfolio
						</span>
						<span className="padPort2">
							below
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default About;