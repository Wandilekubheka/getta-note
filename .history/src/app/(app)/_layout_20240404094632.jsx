import { Slot, SplashScreen, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  const router = useRouter();
  const [userAuth, setUserAuth] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserAuth(user);
    });
  }, []);

  if (userAuth === false) {
    SplashScreen.preventAutoHideAsync();
  } else {
    if (userAuth) {
      router.push("(home)/home");
    } else {
      return (
        <>
          <StatusBar style="light" />
          <Slot />
        </>
      );
    }
  }
}
