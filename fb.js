import firebase from "firebase";    

require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDnyEfUnp7EKqtpm2s6osK_FUIO3QPzD4s",
    authDomain: "biblioteca-8b6ea.firebaseapp.com",
    projectId: "biblioteca-8b6ea",
    storageBucket: "biblioteca-8b6ea.appspot.com",
    messagingSenderId: "490781962308",
    appId: "1:490781962308:web:ab78dbbee767a85fb18c11"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()