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

  if (user) {
    router.replace("(home)/home");
    console.log("redirect");
  } else if (user === false) {
    SplashScreen.preventAutoHideAsync();
  }
  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}
