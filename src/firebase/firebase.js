import * as firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses);
//   });

// database.ref().on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// })

  

  


// database.ref('expenses').push({
//   description: 'Coffee',
//   amount: 200,
//   createdAt: 0,
//   note: ''
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular'
// })

// const firebaseNotes = {
//   notes: {
//     idjsiaods: {
//       title: 'first note!',
//       body: 'this is my note'
//     },
//     dsagffdsfds: {
//       title: 'second note!',
//       body: 'this is my note'
//     },
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First Note',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another Note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// setTimeout(() => {
//   database.ref('job/company').set('Ubisoft');
// }, 3500)
  



// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// })

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500)

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500)

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().set({
//   name: 'Pierrot Morin',
//   age: 30,
//   stressLevel: 6,
//   job: {
//     title: 'Front End Developer',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: 'Montreal',
//     country: 'Canada'
//   },
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Ottawa'
// });



// database.ref()
//   .remove()
//   .then(() => {
//     console.log('sucessfully removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });

