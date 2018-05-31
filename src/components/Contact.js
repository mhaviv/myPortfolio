import React, { Component } from 'react';
import "../css/contact.css";
import fire from '../config/keys'
import { FormErrors } from './FormErrors';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';


class Contact extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  		name: '',
          	email: '',
          	number: '',
          	message: '',
          	timestamp: Date.now(),
          	formHidden: false,
          	formResponse: false,
          	formErrors: {name: '', email: '', number: '', message: ''},
    		nameValid: false,
    		emailValid: false,
    		phoneNumberValid: false,
    		messageValid: false,
    		formValid: false
	  }
	  this.onChange = this.onChange.bind(this)
	  this.onSubmit = this.onSubmit.bind(this)
	}

	componentWillMount() {
		configureAnchors({offset: -60, scrollDuration: 1200})
	}

	onChange(event) {
        const name = event.target.name;
    	const value = event.target.value;
        this.setState({[name]: value},
                  () => { this.validateField(name, value) });
    }

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let nameValid = this.state.nameValid;
		let emailValid = this.state.emailValid;
		let phoneNumberValid = this.state.phoneNumberValid;
		let messageValid = this.state.messageValid;

	switch(fieldName) {
		case 'name':
		    nameValid = value.match(/^[a-z ,.'-]+$/i) && value.length >= 2;
		    fieldValidationErrors.name = nameValid ? '': ' is invalid';
		    break;
		case 'email':
		    emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		    fieldValidationErrors.email = emailValid ? '' : ' is invalid';
		    break;
		case 'number':
		    phoneNumberValid = value.length >= 10;
		    fieldValidationErrors.number = phoneNumberValid ? '': ' is too short';
		    break;
		case 'message':
		    messageValid = value.match(/^[a-zA-Z0-9 ,.!'-]+$/i) && value.length >= 2;
		    fieldValidationErrors.message = messageValid ? '': ' is invalid';
		    break;
		  default:
		    break;

	}

	// console.log("errors", fieldValidationErrors)

	this.setState({formErrors: fieldValidationErrors,
	                nameValid: nameValid,
	                emailValid: emailValid,
	                phoneNumberValid: phoneNumberValid,
	                messageValid: messageValid
	              }, this.validateForm);
	}

	validateForm() {
		const {
			nameValid,
			emailValid,
			phoneNumberValid,
			messageValid
		} = this.state;

		this.setState({
			formValid: nameValid && emailValid && phoneNumberValid && messageValid
		});
	}

	errorClass(error) {
		return(error.length === 0 ? '' : 'has-error');
	}


    onSubmit(event) {
        event.preventDefault();


        // get our form data out of state
        const { name, email, number, message, timestamp } = this.state;

        let myDate = new Date(timestamp);
		let formatedTime = myDate.toJSON();

 		fire.database().ref().push({
 			name: name,
 			email: email,
 			number: number,
 			message: message,
 			timestamp: formatedTime
 		}).then((response) => {
 			// console.log(response)
 		})
  		.catch(function (error) {
			console.log(error)
		});

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


	render() {

		const {
			name,
			email,
			number,
			message,
			formResponse,
			formHidden,
			formErrors,
			formValid
		} = this.state;


		if(formErrors.name.toString() === "name"){
			console.log('helloooooo')
		}

		return(
			<div
				id="contactComponent"
			>
				<ScrollableAnchor
	        		id="contact"
				>
					<div>
						<div
							className={formResponse ? "thankYouOn animated bounceInDown" : "thankYouOff"}
						>
							Thank You!
						</div>
						<div
							className={formHidden ? "formHide" : "formShow"}
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
								<FormErrors
									formErrors={formErrors}
									className="formErrorContainer"
								/>
								<div className=
									{`
										form-group ${this.errorClass(formErrors.name)}
									`}
								>
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
										value={name}
										onChange={this.onChange}
									/>
								</div>
								{/*<FormErrors
									formErrors={formErrors}
									id="nameError"
								/>*/}
								<div className=
									{`
										form-group ${this.errorClass(formErrors.email)}
									`}
								>
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
										value={email}
										onChange={this.onChange}
									/>
								</div>
								{/*<FormErrors
									formErrors={formErrors}
									id="emailError"
								/>*/}
								<div className=
									{`
										form-group ${this.errorClass(formErrors.number)}
									`}
								>
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
										value={number}
										onChange={this.onChange}
									/>
								</div>
								{/*<FormErrors
									formErrors={formErrors}
									id="numberError"
								/>*/}
								<div className=
									{`
										form-group ${this.errorClass(formErrors.message)}
									`}
								>
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
										value={message}
										onChange={this.onChange}
									/>
								</div>
								{/*<FormErrors
									formErrors={formErrors}
									id="messageError"
								/>*/}
								<button
									className="buttonStyle"
									type="submit"
									disabled={!formValid}
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
				</ScrollableAnchor>
			</div>
		)
	}

}

export default Contact;
