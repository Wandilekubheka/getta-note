import { Slot, SplashScreen, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isUser, setIsUser] = useState("");

  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      setIsUser(user);
      if (loading) setLoading(false);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}
