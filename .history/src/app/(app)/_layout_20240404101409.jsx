import { Slot, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  const router = useRouter();
  const [user, setUser] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user_) => {
      setUser(user_);
    });
  });

  if (user === false) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}
