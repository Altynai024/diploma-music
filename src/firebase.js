// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB8czLjRMuI0zQHRHyXcV32J9CTBp6m8Ig",
//   authDomain: "diploma-music.firebaseapp.com",
//   projectId: "diploma-music",
//   storageBucket: "diploma-music.appspot.com",
//   messagingSenderId: "594765692595",
//   appId: "1:594765692595:web:14b06ec2db2c4e5ae8bac6",
//   measurementId: "G-JJQ1HJ11TX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// const auth = getAuth(app);
// export const storage = getStorage(app);

// export const categoryCollection = collection(db, "categories");
// export const productsCollection = collection(db, "products");
// export const ordersCollection = collection(db, "orders");

// const provider = new GoogleAuthProvider();
// // export const LogIn = () => signInWithPopup(auth, provider);
// // export const LogOut = () => signOut(auth);
// export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

// export const onCategoriesLoad = (callback) =>
//   onSnapshot(categoryCollection, (snapshot) =>
//     callback(
//       snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }))
//     )
//   );
// export const onProductsLoad = (callback) =>
//   onSnapshot(productsCollection, (snapshot) =>
//     callback(
//       snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }))
//     )
//   );
// export const onOrdersLoad = (callback) =>
//   onSnapshot(ordersCollection, (snapshot) =>
//     callback(
//       snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }))
//     )
//   );

//   // отправка фотографии и получение ее url
// export const uploadProductPhoto = (file) => {
//   const storageRef = ref(storage, `products/${file.name}`);
//   return uploadBytes(storageRef, file)
//     .then(() => {
//       return getDownloadURL(storageRef);
//     })
//     .catch((error) => {
//       console.log("Failed to upload product photo:", error);
//     });
// };

const firebaseConfig = {
  apiKey: "AIzaSyB8czLjRMuI0zQHRHyXcV32J9CTBp6m8Ig",
  authDomain: "diploma-music.firebaseapp.com",
  projectId: "diploma-music",
  storageBucket: "diploma-music.appspot.com",
  messagingSenderId: "594765692595",
  appId: "1:594765692595:web:14b06ec2db2c4e5ae8bac6",
  measurementId: "G-JJQ1HJ11TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);

//получить список категорий (коллекция документов)
export const categoryCollection = collection(db, 'categories');
export const productCollection = collection(db, 'products');
export const orderCollection = collection(db, 'orders');

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onProductsLoad = (callback) =>
  onSnapshot(productCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onOrdersLoad = (callback) =>
  onSnapshot(orderCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );


// отправка фотографии и получение ее url
export const uploadProductPhoto = (file) => {
  const storageRef = ref(storage, `products/${file.name}`);
  return uploadBytes(storageRef, file)
    .then(() => {
      return getDownloadURL(storageRef);
    })
    .catch((error) => {
      console.log("Failed to upload product photo:", error);
    });
};