import React, { Component } from 'react';
import "../css/home.css";
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

class Home extends Component {
	constructor() {
	  super();

	  this.state = {};
	}

	componentWillMount() {
		configureAnchors({offset: -60, scrollDuration: 1200})
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
									to="/#portfolio"
									className="linkHeadStyle"
								>
									Portfolio
								</a>
							</span>
							<span className="padPort2">
								below
							</span>
						</div>
					</div>
				</div>
			</ScrollableAnchor>
		)
	}
}

export default Home;