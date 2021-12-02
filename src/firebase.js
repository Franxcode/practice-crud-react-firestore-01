import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDbI8Z_ApxUK-reKKuTS5oP1a2ZJs1Rm8U",
	authDomain: "crud-react-8d602.firebaseapp.com",
	projectId: "crud-react-8d602",
	storageBucket: "crud-react-8d602.appspot.com",
	messagingSenderId: "231138188921",
	appId: "1:231138188921:web:0e686b7a5a4096354fbea8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
