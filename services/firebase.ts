import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import dateFormat from "dateformat";

const firebaseConfig = {
  apiKey: "AIzaSyDRjKXTwNwl7rxF0rDM1m8x0g4q3yDNtuw",
  authDomain: "plml-shows.firebaseapp.com",
  databaseURL: "https://plml-shows-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "plml-shows",
  storageBucket: "plml-shows.appspot.com",
  messagingSenderId: "547674336233",
  appId: "1:547674336233:web:8ed3b1041c3ae4a9bdf978"
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export async function writeRngMessage(payload: any) {

    const isoDateTime = dateFormat(Date.now(), "isoDateTime");

    const msgRef = ref(database, `rng/messages/${isoDateTime}`);
    await set(msgRef, payload);
}