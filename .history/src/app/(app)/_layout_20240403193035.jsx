import { Slot, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../../firebase";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) router.replace("(home)/home");
    });
  }, []);
  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}
