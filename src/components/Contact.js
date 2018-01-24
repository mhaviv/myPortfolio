import React, { Component } from 'react';
import "../css/contact.css";

class Contact extends Component {
	constructor() {
	  super();

	  this.state = {
	  	form: {
	  		name: "this"
	  	}
	  };
	}

	grabForm() {
		document.getElementById('contactForm').addEventListener('submit', (e) => {
		  e.preventDefault();
		  console.log(123)
		});
	}

	render() {
		return(
			<div
				id="contact"
			>
			<form
				id="contactForm"
				className="animated bounceInLeft formContainerStyle"
				onSubmit={this.grabForm.bind(this)}
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
						Lets work together!
					</div>
				</div>
				<div
					className="labelContainer"
				>
					<label
						className="labelStyle"
					>
						Name
					</label>
				</div>
				<input
					className="inputStyle"
					type="text"
					placeholder="John Appleseed"
					id="name"
				/>
				<div
					className="labelContainer"
				>
					<label
						className="labelStyle"
					>
						Email
					</label>
				</div>
				<input
					className="inputStyle"
					type="email"
					placeholder="john123@john.com"
					id="email"
				/>
				<div
					className="labelContainer"
				>
					<label
						className="labelStyle"
					>
						Phone Number
					</label>
				</div>
				<input
					className="inputStyle"
					type="tel"
					placeholder="1234567890"
					id="phoneNumber"
				/>
				<div
					className="labelContainer"
				>
					<label
						className="labelStyle"
					>
						Message
					</label>
				</div>
				<textarea
					className="inputStyle textareaStyle"
					rows="12"
					cols="72"
					id="message"
				/>
				<button
					className="buttonStyle"
					type="submit"
					// onClick=
				>
					Submit
				</button>
			</form>
			</div>
		)
	}

}

export default Contact;