// import * as firebase from 'firebase';
// const firebase = require('firebase');
const admin = require("firebase-admin");


// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyD3ddrEiszZyT-P7PDiI4_fYuRyUPc7qic",
//   authDomain: "portfolio-5ba9d.firebaseapp.com",
//   databaseURL: "https://portfolio-5ba9d.firebaseio.com",
//   projectId: "portfolio-5ba9d",
//   storageBucket: "portfolio-5ba9d.appspot.com",
//   messagingSenderId: "588445898377"
// };

// let fire = firebase.initializeApp(config);

var SDK = {
	"type": "service_account",
	"project_id": "portfolio-5ba9d",
	"private_key_id": "9a1ae03a283d2516380fba32811ef358c35bdf12",
	"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD59Vi3Bw/9Vn5Z\nJNPANHU/DPG/2mDosz7AQvQxlbi/actrLZsOj9hdqwFuC+zv37clTNwRsP0SsoM8\naupoPP99GBrtn3bilZyXb135tMD8bXuzF9UVgYbSbJs01jC1P9WwjsDsJe+Us71t\n+EMbaL49XupHVsxY8g2SGyRmrGodkQVoFUpFBJ8kV0wHSWeb/C7QzNlx7mr2kBQM\noCI/4kxmR2w6eYsZ9d7yY7RhAkmS2WtdEF6STBzRzmd2/lME9I3Rp2fw8CPI71D+\n1OsnStiGE2WM63eNLJ2V7u+tomditUSG3cwimOuxm8rsodWgMiT8YBYLgV+I3Imz\n/tYK3C0FAgMBAAECggEAK7nELaxiGy6sxppfIoHqur9gcO/aQQrOIOL1hdELswxm\nRdcCB2+ZaXVXODGE3sdzaeaCnuOnucQZmhGX9Okqxm7XkxbwvJ1webtFJL/+fIoI\neCFkqLDybVALbJhFiAdlMdAfJpBSU2CH9DtYPey6TtESSa2A7NRXFGaEHSPvIkGa\nP4mLkODqOMiAPzAINUzhJFx7zSN27y5BDUhwIQHTcVPIwHOCC4wy2MS5G/qXXoUk\nfcKjd/tUDM3+lgOZVoHlJL3jvbK/iVT6pguu7co1hcCAnd+Ysy/U5ojiZbSCEw8l\nn5Ju19wveapDZmVLkNqiKEjIMc6F1KrAcJOQLSR3oQKBgQD+5xSStAFU7NGw67ab\nBfkCJJ4HxDh2IKC/mXx04fEWPkxrogFlL3miuoyUMVanvkD4ttDGCDmxnEQK1QhP\nw4/hMCCXl92Fyz9OEsL5z8ud5ZqT92KTeRfOa2gC4czwjyHiYe4UV/GiHKmlosF9\nT0JgqH1my5920y2lwn9aFjIBtQKBgQD7CNE4Icnd2I8329OojKd9WEPCwnAkAQ+J\nEbE9LA73laupq+yH9wHCNXXtRQ7TE4r+b6YvXQD3o2bwJKRbHu7kdqzMF5dAPM1o\ntkUq+cDfJHw0X7nvy5Y98n7GsDx/sJ0MUJcDwyCv456enS850kzCVLxBZWcgI6Id\niSaYQ+vQEQKBgBfgl4nCeNl2sZHMErfk0FWGDpOVquBN4CDyhLkCLS4zOb9fVpge\n4Vr/9IkxMffWl4l0vou+W4EqrSkCmZu3KvQiKPtqS2LsDgsHMOJrt5wb1OYFZ2N/\nFV7NqtmSQztJfRgSqlWXg1f3LWEJpOxTD1m0jsKhUle0InODi6Bpsdd9AoGBAMYN\nUctAVRwys+N1Cosq1SV+Eo/AiWrOb2xLyhKiBPjuW23Ulxs6FGgdd3mHh0eeXoWY\nnns1nALEJv2FWyoMwJr8yh2G6yyiC8j2LKHYQ4OJLHjBoVd/vnwHKmAlQMXZGD5U\nAqDUPKCoK0emaVDsCuUypwfNMcxYcJlu0EVHKO+RAoGAUae5rgNH9WcshVAtBp9a\nU8k1y+aDuYIG8ujsbu49Q1vw5MbBsNXH66pl+o0P/nlSKX1QYGPSBFP4cEJ9FfAj\nmGWiLFuHSgAJ+5XHQ6KQQq2EtMqaVHapKWTpmxW+e1Ep9/W9BHc7Dz4084Lr0gqp\n+1W7PIq83lMmDYAgrLTpMw8=\n-----END PRIVATE KEY-----\n",
	"client_email": "firebase-adminsdk-130oh@portfolio-5ba9d.iam.gserviceaccount.com",
	"client_id": "102316956472607194438",
	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
	"token_uri": "https://accounts.google.com/o/oauth2/token",
	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-130oh%40portfolio-5ba9d.iam.gserviceaccount.com"
}

var serviceAccount = require('./portfolio-5ba9d-firebase-adminsdk-130oh-9a1ae03a28.json');

exports.myAdmin = admin.initializeApp({
				  credential: admin.credential.cert(serviceAccount),
				  databaseURL: 'https://portfolio-5ba9d.firebaseio.com'
				});







