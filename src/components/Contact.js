import React, { Component } from 'react';
import "../css/contact.css";
import fire from '../firebase'
import axios from 'axios';



class Contact extends Component {
	constructor() {
	  super();

	  this.state = {
	  		name: '',
          	email: '',
          	number: '',
          	message: '',
          	timestamp: Date.now(),
          	formHidden: false,
          	formResponse: false
	  }
	}

	onChange = (event) => {
        const state = this.state
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    onSubmit = (event) => {
        event.preventDefault();


        // get our form data out of state
        const { name, email, number, message, timestamp } = this.state;

        let myDate = new Date(timestamp);
		let formatedTime = myDate.toJSON();

        const formData = {name, email, number, message, timestamp };

 		fire.database().ref().push({
 			name: name,
 			email: email,
 			number: number,
 			message: message,
 			timestamp: formatedTime
 		}).then((response) => {
 			console.log(response)
 		})
  		.catch(function (error) {
			console.log(error)
		});

  		this.nodeMailer(formData)
		this.formHider()
		this.onFormSubmit()


	}

	formHider() {
		this.setState(currentState => ({
			formHidden: !currentState.formHidden
		}), () => console.log(`Toggling visibility of Header!: ${this.state.formHidden}`))
	}

	onFormSubmit() {
		this.setState(currentState => ({
			formResponse: !currentState.formResponse
		}), () => console.log(`Toggling visibility of Header!: ${this.state.formResponse}`))
	}

	nodeMailer(data) {
		axios.
			post('/send', data)
			.then((response) => console.log(response))
			.catch((error) => console.log(error))
	}

	render() {

		const { name, email, phone, message } = this.state;

		return(
			<div
				id="contact"
			>
				<div
					className={this.state.formResponse ? "thankYouOn animated bounceInDown" : "thankYouOff"}
				>
					Thank You!
				</div>
				<div
					className={this.state.formHidden ? "formHide" : "formShow"}
				>
					<form
						method="POST"
						action="send"
						id="contactForm"
						className="wow bounceInLeft formContainerStyle"
						onSubmit={this.onSubmit}
					>
						<div
							id="quesWorkTog"
						>
							Have any questions?
							<div
								className="workStyle"
							>
								Fill out the form below and
							</div>
							<div
								className="workStyle"
							>
								lets work together!
							</div>
						</div>
						<div
							className="labelContainer"
						>
							<label
								className="labelStyle"
								htmlFor="name"
							>
								Name
							</label>
						</div>
						<input
							className="inputStyle"
							type="text"
							placeholder="John Appleseed"
							id="name"
							name="name"
							onChange={this.onChange}
						/>
						<div
							className="labelContainer"
						>
							<label
								className="labelStyle"
								htmlFor="email"
							>
								Email
							</label>
						</div>
						<input
							className="inputStyle"
							type="email"
							placeholder="john123@john.com"
							id="email"
							name="email"
							onChange={this.onChange}
						/>
						<div
							className="labelContainer"
						>
							<label
								className="labelStyle"
								htmlFor="number"
							>
								Phone Number
							</label>
						</div>
						<input
							className="inputStyle"
							type="tel"
							placeholder="1234567890"
							id="phoneNumber"
							name="number"
							onChange={this.onChange}
						/>
						<div
							className="labelContainer"
						>
							<label
								className="labelStyle"
								htmlFor="message"
							>
								Message
							</label>
						</div>
						<textarea
							className="inputStyle textareaStyle"
							rows="12"
							cols="72"
							id="message"
							name="message"
							onChange={this.onChange}
						/>
						<button
							className="buttonStyle"
							type="submit"
							// onClick=
						>
							Submit
						</button>
					</form>
					<footer
						className="footerStyle"
					>
						Copyright © 2018 Michael Haviv - All Rights Reserved.
					</footer>
				</div>
			</div>
		)
	}

}

export default Contact;