// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzQVDbQjZ5tpRt18fknrsMH1PGyBgRtOU",
  authDomain: "the-dragon-news-client-4117e.firebaseapp.com",
  projectId: "the-dragon-news-client-4117e",
  storageBucket: "the-dragon-news-client-4117e.appspot.com",
  messagingSenderId: "582737785988",
  appId: "1:582737785988:web:d93b2a51496addc1cf3ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;