import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApps, initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyByuR5bwr_ZdHwElJDkARDePSH2VFh5-Ns",
  authDomain: "getta-note.firebaseapp.com",
  projectId: "getta-note",
  storageBucket: "getta-note.appspot.com",
  messagingSenderId: "194128065009",
  appId: "1:194128065009:web:fe695ef3a80933228dd450",
};

let app;
if (getApps.length === 0) app = initializeApp(firebaseConfig);
else app = getApps[0];
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});

export { app, auth, db };
