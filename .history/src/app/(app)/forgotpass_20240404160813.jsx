import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input } from "@rneui/base";
import { Button } from "@rneui/themed";
import { sendPasswordResetEmail } from "firebase/auth/react-native";
import { Stack, useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const resetPass = () => {
    if (email.includes("@")) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          Alert.alert("Reset email sent!");
          router.back();
        })
        .catch((err) => {
          Alert.alert(err.message);
        });
    }
  };
  <Stack.Screen options={{ headerShown: true }} />;
  return (
    <SafeAreaView className="flex-1  bg-stone-950 items-center justify-center">
      <Text className="text-white text-3xl mb-10">Forgot Password</Text>
      <Input
        inputStyle={{ fontFamily: "Sofia", color: "white" }}
        onChangeText={setEmail}
        containerStyle={{ width: "90%" }}
        inputContainerStyle={{ paddingHorizontal: 10 }}
        placeholder="Enter your email"
        rightIcon={<FontAwesome5 name="email" size={20} color="white" />}
      />

      <Button
        onPress={() => resetPass()}
        buttonStyle={{ paddingVertical: 15 }}
        containerStyle={{ width: "60%", paddingVertical: 10 }}
        titleStyle={{ fontFamily: "SofiaBold", fontSize: 24 }}
        title={"Register"}
      />
    </SafeAreaView>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({});
