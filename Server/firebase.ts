
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const ServerConfig = () => {
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyD7Eg6ZGt2mXt4PQBH6MVkIkE87OUzpmiE",
    authDomain: "damcae.firebaseapp.com",
    projectId: "damcae",
    storageBucket: "damcae.appspot.com",
    messagingSenderId: "76103638983",
    appId: "1:76103638983:web:47305e53803263cb2743e2",
    measurementId: "G-77S7ZTLMN4"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    console.log(analytics)
    return app

}

export default ServerConfig
