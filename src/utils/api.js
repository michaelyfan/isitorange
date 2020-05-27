import { colors } from './enums';
import firebase from 'firebase/app';
import 'firebase/firestore';

// come at me, malicious users, with this deceivingly public api key
const config = {
  apiKey: "AIzaSyBfc4Ci9Qrx3uwBpqc_xC-avhuo7CQDkk0",
  databaseURL: "https://isitorange-c6e44.firebaseio.com",
  projectId: "isitorange-c6e44"
};
firebase.initializeApp(config);
const db = firebase.firestore();

export function updateColorRating(colorId) {
  const docRef = db.collection('colors').doc(colorId);

  return db.runTransaction((transaction) => {
    return transaction.get(docRef).then((colorDoc) => {
      let votes;
      if (!colorDoc.exists) {
        votes = 1;
        transaction.set(docRef, {votes: votes})
      } else {
        votes = colorDoc.data().votes + 1;
        transaction.update(docRef, { votes: votes });
      }

      return {votes: votes};
    });
  });

}
