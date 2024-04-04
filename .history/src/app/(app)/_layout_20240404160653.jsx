import { Stack, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  const router = useRouter();
  const [user, setUser] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user_) => {
      setUser(user_);
      if (user !== undefined && user !== null) {
        if (user_ !== null) router.replace("/home");
      }
    });
    return unsubscribe;
  }, [user]);

  if (user === undefined) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
