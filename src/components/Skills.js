import React, { Component } from 'react';
import "../css/skills.css";
import SkillsChild from './SkillsChild'


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
			"Heroku",
			"Git",
			"Github"
	  	]
	  };
	  this.renderSkillsChildren = this.renderSkillsChildren.bind(this)
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

	// nameAppend() {
	// 	if this.state.Skills()
	// }

	render() {

		return(
			<div
				id="bigContainer"
			>
				<div
					id="expertiseContainer"
				>
					My Expertise
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