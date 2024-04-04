import { Slot, SplashScreen, router, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  const [loading, setLoading] = useState(true);
  const [isUser, setIsUser] = useState("");
  useEffect(() => {
    const unsubscribe = getUser();
  }, []);
  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (!user) {
        return (
          <>
            <StatusBar style="light" />
            <Slot />
          </>
        );
      }
      router.push("/home");
    });
  };
}
