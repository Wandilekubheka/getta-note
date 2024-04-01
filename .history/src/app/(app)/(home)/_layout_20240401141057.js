import { Stack } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert, TouchableOpacity } from "react-native";
import { signOut } from "firebase/auth/react-native";
import { auth } from "../../../../firebase";
import { StatusBar } from "expo-status-bar";

export default function HomeLayout() {
  const signOutUser = () => {
    signOut(auth).catch((err) => {
      Alert.alert(err);
    });
  };
  return (
    <>
      <StatusBar style="light" />
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
          name="viewNote"
          options={{
            headerTitle: "A Note",
          }}
        />
        <Stack.Screen
          name="userProfile"
          options={{
            headerTitle: "user Profile",
            headerRight: () => (
              <TouchableOpacity onPress={signOutUser}>
                <MaterialIcons name="logout" size={24} color="#FF0A0A" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </>
  );
}
