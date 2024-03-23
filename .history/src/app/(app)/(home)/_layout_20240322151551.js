import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          color: "white",
          fontFamily: "Sofia",
          fontSize: 16,
        },
        headerStyle: {
          backgroundColor: "#0c0a09",
        },
      }}
    >
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen
        name="addNote"
        options={{
          headerShown: true,
          headerTitle: "Add A Note",
        }}
      />
      <Stack.Screen
        name="userProfile"
        options={{
          headerShown: true,
          headerTitle: "user Profile",
        }}
      />
    </Stack>
  );
}
