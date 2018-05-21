// import * as firebase from 'firebase';
const firebase = require('firebase');

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyD3ddrEiszZyT-P7PDiI4_fYuRyUPc7qic',
  authDomain: 'portfolio-5ba9d.firebaseapp.com',
  databaseURL: 'https://portfolio-5ba9d.firebaseio.com',
  projectId: 'portfolio-5ba9d',
  storageBucket: 'portfolio-5ba9d.appspot.com',
  messagingSenderId: '588445898377',
};
const fire = firebase.initializeApp(config);

// export default fire;
module.exports = fire;
