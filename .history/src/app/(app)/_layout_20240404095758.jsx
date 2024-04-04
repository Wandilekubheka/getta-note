import { Slot, SplashScreen, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUser(user);
      if (isUser !== false) {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);
  // if (loading) {
  //   return null;
  // }

  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}
