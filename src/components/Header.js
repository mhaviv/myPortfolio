import React, { Component } from 'react';
import "../css/header.css";

class Header extends Component {

	constructor() {
	  super();

	  this.state = {
	  	onHover: false,
	  	hasClass: false,
	  	navItemsOn: {
	  		about: false,
	  		skills: false,
	  		portfolio: false,
	  		contact: false
	  	}
	  };
	}

	toggleOn() {
		this.setState({
			hasClass: true
		});
		console.log('toggle on!!')
	}

	toggleOff() {
		this.setState({
			hasClass: false
		});
		console.log('toggle off!!')
	}

	toggleNavAboutOn() {
		this.setState({
			navItemsOn: {
				about: true
			}
		});
		console.log('toggle About on!!')
	}

	toggleNavAboutOff() {
		this.setState({
			navItemsOn: {
				about: false
			}
		});
		console.log('toggle About off!!')
	}

	toggleNavSkillsOn() {
		this.setState({
			navItemsOn: {
				skills: true
			}
		});
		console.log('toggle Skills on!!')
	}

	toggleNavSkillsOff() {
		this.setState({
			navItemsOn: {
				skills: false
			}
		});
		console.log('toggle Skills off!!')
	}

	toggleNavPortfolioOn() {
		this.setState({
			navItemsOn: {
				portfolio: true
			}
		});
		console.log('toggle Portfolio on!!')
	}

	toggleNavPortfolioOff() {
		this.setState({
			navItemsOn: {
				portfolio: false
			}
		});
		console.log('toggle Portfolio off!!')
	}

	toggleNavContactOn() {
		this.setState({
			navItemsOn: {
				contact: true
			}
		});
		console.log('toggle Contact on!!')
	}

	toggleNavContactOff() {
		this.setState({
			navItemsOn: {
				contact: false
			}
		});
		console.log('toggle Contact off!!')
	}



	render() {

		let boxClass = ["liStyle Box"];
    	if(this.state.hasClass) {
      		boxClass.push('animated swing');
    	}

    	let nameSoftClass = ["liStyle nameSoft"];
    	if(this.state.hasClass) {
      		nameSoftClass.push('animated slideOutRight');
    	}


		let navAboutClass = ["liStyle"];
    	if(this.state.navItemsOn.about) {
      		navAboutClass.push('animated shake');
    	}

    	let navSkillsClass = ["liStyle"];
    	if(this.state.navItemsOn.skills) {
      		navSkillsClass.push('animated shake');
    	}

    	let navPortfolioClass = ["liStyle"];
    	if(this.state.navItemsOn.portfolio) {
      		navPortfolioClass.push('animated shake');
    	}

    	let navContactClass = ["liStyle"];
    	if(this.state.navItemsOn.contact) {
      		navContactClass.push('animated shake');
    	}

		return (
			<nav>
				<ul
					id="ulStyle"
				>
					<div
						className="MHHeadContainer"
					>
						<div
							className="logoContainer"
						>
							<li
								className="liStyle logo"
							/>
							<li
								className={boxClass.join(' ')}
								onMouseEnter={this.toggleOn.bind(this)}
    							onMouseLeave={this.toggleOff.bind(this)}
							/>
						</div>
						<div className="nameSoftContainer">
							<li
								className={nameSoftClass.join(' ')}
								onMouseEnter={this.toggleOn.bind(this)}
    							onMouseLeave={this.toggleOff.bind(this)}
							/>
						</div>
					</div>
					<div className="navItemsContainer">
						<li
							className={navAboutClass.join(' ')}
							onMouseEnter={this.toggleNavAboutOn.bind(this)}
    						onMouseLeave={this.toggleNavAboutOff.bind(this)}
						>
							About
						</li>
						<li
							className={navSkillsClass.join(' ')}
							onMouseEnter={this.toggleNavSkillsOn.bind(this)}
    						onMouseLeave={this.toggleNavSkillsOff.bind(this)}
						>
							Skills
						</li>
						<li
							className={navPortfolioClass.join(' ')}
							onMouseEnter={this.toggleNavPortfolioOn.bind(this)}
    						onMouseLeave={this.toggleNavPortfolioOff.bind(this)}
						>
							Portfolio
						</li>
						<li
							className={navContactClass.join(' ')}
							onMouseEnter={this.toggleNavContactOn.bind(this)}
    						onMouseLeave={this.toggleNavContactOff.bind(this)}
						>
							Contact
						</li>
					</div>
				</ul>
			</nav>
		)
	}

}

export default Header;
