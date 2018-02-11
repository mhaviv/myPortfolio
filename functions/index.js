/*************************Firebase Cloud Function************************************/

const functions = require('firebase-functions');
const keys = require('./config/keys');
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
