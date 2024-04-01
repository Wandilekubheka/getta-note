import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";

export default function appLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Irish: require("../assets/fonts/IrishGrover-Regular.ttf"),
    SofiaBold: require("../assets/fonts/SofiaSans-Bold.ttf"),
    SofiaLight: require("../assets/fonts/SofiaSans-Light.ttf"),
    Sofia: require("../assets/fonts/SofiaSans-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}
