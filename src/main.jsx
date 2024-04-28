import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC6MalfYJzvSAKEGOhVxC_6NValsvhKy3o',
	authDomain: 'coderhouse-d1c0c.firebaseapp.com',
	projectId: 'coderhouse-d1c0c',
	storageBucket: 'coderhouse-d1c0c.appspot.com',
	messagingSenderId: '1000827387333',
	appId: '1:1000827387333:web:f12edc2158098d316c9fac',
};

// Initialize Firebase
initializeApp(firebaseConfig);

import './index.css';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
