import React, { Component } from 'react';
import "../css/skills.css";

class SkillsChild extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	overlayOn: false
	  };
	}

	skillOverlayToggleOn() {
		this.setState(currentState => ({
			overlayOn: true
		}), () => console.log(`Toggling visibility of Overlay!: ${this.state.overlayOn}`))
	}
	skillOverlayToggleOff() {
		this.setState(currentState => ({
			overlayOn: false
		}), () => console.log(`Toggling visibility of Overlay!: ${this.state.overlayOn}`))
	}


	render() {


		return (
			<ul>
				<li
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="javascript"
						name="Javascript"
					>
					</div>
					<div
						className="skillText"
					>
						Javascript
					</div>
				</li>
				<li
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="react"
						name="React"
					>
					</div>
					<div
						className="skillText"
					>
						React
					</div>
				</li>
				<li 
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="react-native"
						name="React Native"
					>
					</div>
					<div
						className="skillText"
					>
						React Native
					</div>
				</li>
				<li 
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="node"
						name="Node.js"
					>
					</div>
					<div
						className="skillText"
					>
						Node.js
					</div>
				</li>
				<li 
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="swift"
						name="Swift"
					>
					</div>
					<div
						className="skillText"
					>
						Swift
					</div>
				</li>
				<li 
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="jquery"
						name="jQuery"
					>
					</div>
					<div
						className="skillText"
					>
						jQuery
					</div>
				</li>
				<li 
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="bootstrap"
						name="Bootstrap"
					>
					</div>
					<div
						className="skillText"
					>
						Bootstrap
					</div>
				</li>
				<li 
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="postgresql"
						name="PostgreSQL"
					>
					</div>
					<div
						className="skillText"
					>
						PostgreSQL
					</div>
				</li>
				<li 
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="html5"
						name="HTML5"
					>
					</div>
					<div
						className="skillText"
					>
						HTML5
					</div>
				</li>
				<li 
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="css3"
						name="CSS3"
					>
					</div>
					<div
						className="skillText"
					>
						CSS3
					</div>
				</li>
				<li 
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="firebase"
						name="Firebase"
					>
					</div>
					<div
						className="skillText"
					>
						Firebase
					</div>
				</li>
				<li 
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="aws"
						name="Amazon Web Services"
					>
					</div>
					<div
						className="skillText"
					>
						Amazon Web Services
					</div>
				</li>
				<li 
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="heroku"
						name="Heroku"
					>
					</div>
					<div
						className="skillText"
					>
						Heroku
					</div>
				</li>
				<li 
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="git"
						name="Git"
					>
					</div>
					<div
						className="skillText"
					>
						Git
					</div>
				</li>
				<li 
					className={this.state.overlayOn ? "mySkillOverlay" : "mySkill"}
					onMouseEnter={this.skillOverlayToggleOn.bind(this)}
					onMouseLeave={this.skillOverlayToggleOff.bind(this)}
				>
					<div
						className="skillsItem"
						id="github"
						name="Github"
					>
					</div>
					<div
						className="skillText"
					>
						Github
					</div>
				</li>
			</ul>
		)
	}

}


export default SkillsChild;