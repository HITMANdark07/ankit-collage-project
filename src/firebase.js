import firebase from 'firebase';

const firebaseConfig = {
	databaseURL: 'https://collage-project-70d81-default-rtdb.asia-southeast1.firebasedatabase.app',
	apiKey: "AIzaSyDmyPpQwm-orpRr1-_GDrtCV6-n5xgk-go",
	authDomain: "collage-project-70d81.firebaseapp.com",
	projectId: "collage-project-70d81",
	storageBucket: "collage-project-70d81.appspot.com",
	messagingSenderId: "789323818563",
	appId: "1:789323818563:web:aefc4b09d359cd400d96f6",
	measurementId: "G-243LKF8MNN"
};

//connecting frontend to backend

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
