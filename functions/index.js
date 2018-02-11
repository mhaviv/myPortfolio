/*************************Firebase Cloud Function************************************/

const functions = require('firebase-functions');
const domain = 'sandbox534b67f6aba44c968328339f34014df4.mailgun.org'
const apiKey = 'key-8051aa94de2ba7b626b7f0f1f8c876cd'
const mailgun  = require('mailgun-js')({apiKey, domain})

exports.sendMailonWrite = functions.database.ref('/{Id}').onWrite((event) => {
    var user = event.data.val()
    console.log(user)
    var data = {
        from: 'submission@portfolioapp.io',
        to: 'mhaviv18@gmail.com',
        subject: 'This is a mail from '+ user.name,
        text:`
          Name: ${user.name}
          Phone Number: ${user.number}
          Email: ${user.email}
          Message: ${user.message}
        `
      };
      mailgun.messages().send(data, function (error, body) {
        console.log(error);
        console.log(body);
      });
      console.log("Mail sent dude ...")
});
