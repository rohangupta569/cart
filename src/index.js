import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import App from './App';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsBYA3KWHgLx9pbjaJwZRPd69N-UbJYPQ",
  authDomain: "cart-a42fa.firebaseapp.com",
  projectId: "cart-a42fa",
  storageBucket: "cart-a42fa.appspot.com",
  messagingSenderId: "4289699280",
  appId: "1:4289699280:web:5b47195eed4489ad5badd5"
};

// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

