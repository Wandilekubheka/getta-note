import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input } from "@rneui/base";
import { Button } from "@rneui/themed";
import { sendPasswordResetEmail } from "firebase/auth/react-native";
import { useRouter } from "expo-router";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const sendResetpass = () => {
    if (email.includes("@")) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          Alert.alert("Reset email sent!");
          router.back();
        })
        .catch((err) => {
          Alert.alert(err);
        });
    }
  };
  return (
    <View>
      <Input
        secureTextEntry
        inputStyle={{ fontFamily: "Sofia", color: "white" }}
        onChangeText={setEmail}
        containerStyle={{ width: "90%" }}
        inputContainerStyle={{ paddingHorizontal: 10 }}
        placeholder="**********"
        rightIcon={<FontAwesome5 name="lock" size={20} color="white" />}
      />

      <Button
        onPress={() => sendResetpass()}
        buttonStyle={{ paddingVertical: 15 }}
        containerStyle={{ width: "60%", paddingVertical: 10 }}
        titleStyle={{ fontFamily: "SofiaBold", fontSize: 24 }}
        title={"Register"}
      />
    </View>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({});
