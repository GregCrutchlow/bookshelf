// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCrRqn-2o-g5eB1fHS1fAYfRfaA4W6-9tg',
	authDomain: 'bookshelf015.firebaseapp.com',
	databaseURL: 'https://bookshelf015-default-rtdb.firebaseio.com',
	projectId: 'bookshelf015',
	storageBucket: 'bookshelf015.appspot.com',
	messagingSenderId: '882238843513',
	appId: '1:882238843513:web:8da7e2b9fa7ee5c97782a8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
