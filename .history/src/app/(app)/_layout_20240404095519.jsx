import { Slot, SplashScreen, useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isUser, setIsuser] = useState(false);
  SplashScreen.preventAutoHideAsync();

  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}
