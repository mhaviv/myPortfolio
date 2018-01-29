import React, { Component } from 'react';
import "../css/about.css";
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import ScrollableAnchor from 'react-scrollable-anchor';


class Home extends Component {
	constructor() {
	  super();
	
	  this.state = {};
	}

	render() {
		
		return (
			<div
				className="aboutContainer"
				id="about"
			>
			<ScrollableAnchor id={'about'}>
			<BrowserRouter>
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
							<Link
								to="/#portfolio"
								className="linkHeadStyle"
							>
								Portfolio
							</Link>
						</span>
						<span className="padPort2">
							below
						</span>
					</div>
				</div>
			</BrowserRouter>
			</ScrollableAnchor>
			</div>
		)
	}
}

export default Home;