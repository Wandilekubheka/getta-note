import { Stack } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

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
          headerTitle: "Add A Note",
        }}
      />
      <Stack.Screen
        name="userProfile"
        options={{
          headerTitle: "user Profile",
          headerRight: () => (
            <MaterialIcons name="logout" size={24} color="#FF0A0A" />
          ),
        }}
      />
    </Stack>
  );
}
