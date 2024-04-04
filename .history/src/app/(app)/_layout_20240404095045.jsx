import { Slot, SplashScreen, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  const router = useRouter();
  const [userAuth, setUserAuth] = useState(false);
  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserAuth(user);
    });

    if (userAuth !== false) {
      SplashScreen.hideAsync();
    }
    if (userAuth) {
      router.replace("(home)/home");
    }
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}
