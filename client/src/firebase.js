import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyA4K6Pxc_SnjBdxzIgmlO1PJ8z9guH0aK4",
    authDomain: "truckfitupregister.firebaseapp.com",
    projectId: "truckfitupregister",
    storageBucket: "truckfitupregister.appspot.com",
    messagingSenderId: "641068289442",
    appId: "1:641068289442:web:bae4b7df41fa3f8dfcb6fb",
    measurementId: "G-B90DRHG5Z7"
})

export const auth = app.auth();
export default app;