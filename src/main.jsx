import React from 'react';
import ReactDOM from 'react-dom/client';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyC6MalfYJzvSAKEGOhVxC_6NValsvhKy3o',
	authDomain: 'coderhouse-d1c0c.firebaseapp.com',
	projectId: 'coderhouse-d1c0c',
	storageBucket: 'coderhouse-d1c0c.appspot.com',
	messagingSenderId: '1000827387333',
	appId: '1:1000827387333:web:f12edc2158098d316c9fac',
};

initializeApp(firebaseConfig);

import './index.css';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
