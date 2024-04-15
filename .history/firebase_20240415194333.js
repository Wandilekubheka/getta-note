import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApps, initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: ,
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
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
