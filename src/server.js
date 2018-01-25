// const express = require('express');
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const nodemailer = require('nodemailer');

// const app = express();

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// app.use('/public', express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.post('/send', (req, res) => {
// 	const output = `
// 	<p>New Contact Request</p>
// 	<h3>Contact Details:</h3>
// 	<ul>
// 		<li>Name: ${req.body.name}<li>
// 		<li>Email: ${req.body.email}<li>
// 		<li>Phone: ${req.body.number}<li>
// 	</ul>
// 	<h3>Message</h3>
// 	<p>${req.body.message}</p>
// 	`;

// // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//          service: 'gmail',
//          auth: {
//                 user: 'mhaviv18@gmail.com',
//                 pass: 'mikey1800'
//             },
//             tls:{
//       			rejectUnauthorized:false
//     		}
//         });

//     // setup email data with unicode symbols
//     const mailOptions = {
//         from: '"Nodemailer Contact" <mhaviv18@gmail.com>', // sender address
//         to: 'mhaviv18@gmail.com', // list of receivers
//         subject: 'Node Contact Request', // Subject line
//         html: output // html body
//     };

//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//         res.render('contact', {msg:'Email has been sent'});
//     });
//     })

// app.get('/', (req, res) => {
// 	res.send('Hello');
// })

// app.listen('3001', () => console.log('Server Started!'));