import firebaseConfig from "./FirebaseConfig";
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, onValue, remove } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
//ref(database, 'pictures/');
//ref(database, 'quotes/');

export default database;