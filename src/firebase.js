import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {};

firebase.initializeApp(config);

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export default firebase;
