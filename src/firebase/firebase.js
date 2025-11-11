import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyARcohHW8X_Za0d1jsRtWL39H1anz-sHUY",
  authDomain: "gestionhc-2144.firebaseapp.com",
  projectId: "gestionhc-2144",
  storageBucket: "gestionhc-2144.firebasestorage.app",
  messagingSenderId: "466638731317",
  appId: "1:466638731317:web:027f389f1471a37cab197c",
  measurementId: "G-H36LZ16CEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Consultas Avanzadas en Firestore: Uso de query y where
const productsCollectionRef = collection(db, "products");
const q = query(productsCollectionRef, where("price", ">", 10000));

getDocs(q).then(snapshot => {
  snapshot.forEach(doc => {
    console.log(doc.id, doc.data());
  });
});

const complexQuery = query(
  productsCollectionRef,
  where("price", ">", 10000),
  where("type", "==", "medicamento")
);

getDocs(complexQuery).then(snapshot => {
  snapshot.forEach(doc => {
    console.log(doc.id, doc.data());
  });
});

const limitedQuery = query(productsCollectionRef, where("price", ">", 100), limit(5));

getDocs(limitedQuery).then(snapshot => {
  snapshot.forEach(doc => {
    console.log(doc.id, doc.data());
  });
});

let lastVisible = null;
const firstPageQuery = query(itemsCollectionRef, orderBy("price"), limit(5));

getDocs(firstPageQuery).then(snapshot => {
  lastVisible = snapshot.docs[snapshot.docs.length - 1];
  snapshot.forEach(doc => {
    console.log(doc.id, doc.data());
  });
});

const nextPageQuery = query(
  itemsCollectionRef,
  orderBy("price"),
  startAfter(lastVisible),
  limit(5)
);

getDocs(nextPageQuery).then(snapshot => {
  snapshot.forEach(doc => {
    console.log(doc.id, doc.data());
  });
});

export async function getDocuments() {
    const querySnapshot = await getDocs(collection(db, 'displayTables'))
}