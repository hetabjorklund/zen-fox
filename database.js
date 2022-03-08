import firebaseConfig from "./FirebaseConfig";
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;