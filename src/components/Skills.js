import React, { Component } from 'react';
import "../css/skills.css";
import SkillsChild from './SkillsChild'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'

class Skills extends Component {
	constructor() {
	  super();

	  this.state = {
	  	overlayOn: false,
	  	Skills: [
	  		"Javascript",
			"React",
			"React Native",
			"Node.js",
			"Swift",
			"jQuery",
			"Bootstrap",
			"PostgreSQL",
			"Html5",
			"Css3",
			"Firebase",
			"Amazon Web Services",
	  	]
	  };
	  this.renderSkillsChildren = this.renderSkillsChildren.bind(this)
	}

	componentWillMount() {
		configureAnchors({offset: -60, scrollDuration: 1200})
	}

	overlayHide(){
		this.setState(currentState => ({
			overlayOn: false
		}),()=> console.log(`overlay ${this.state.overlayOn}`))
	}
	overlayShow(){
		if(this.state.overlayOn){
			this.setState(currentState => ({
				overlayOn: true
			}),()=> console.log(`overlay ${this.state.overlayOn}`))
		}
	}

	renderSkillsChildren() {
		const mySkills=this.state.Skills
		mySkills.forEach((item) => {
		  return item;
		})
	}

	render() {

		return(
			<div
				className="bigContainer"
			>
				<div
					id="expertiseContainer"
				>
				<ScrollableAnchor
	            	id="skills"
	         	>
	         	<div id="expertiseMargin">
					My Expertise
	         	</div>
				</ScrollableAnchor>
				</div>
				<div
					id="skillsContainer"
				>
					<SkillsChild />
				</div>
			</div>
		)
	}
}

export default Skills;