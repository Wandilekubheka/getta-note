import { Slot, SplashScreen, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isUser, setIsUser] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setIsUser(user.email);
      console.log(isUser);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}
