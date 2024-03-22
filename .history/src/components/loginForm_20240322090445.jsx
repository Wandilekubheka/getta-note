import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Input } from "@rneui/base";
import { Button } from "@rneui/themed";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then()
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <View className=" w-full items-center">
      <Input
        inputStyle={{ fontFamily: "Sofia", color: "white" }}
        onChangeText={setEmail}
        containerStyle={{ width: "90%" }}
        inputContainerStyle={{ paddingHorizontal: 10 }}
        placeholder="Email"
        rightIcon={<MaterialIcons name="email" size={24} color="white" />}
      />
      <Input
        secureTextEntry
        inputStyle={{ fontFamily: "Sofia", color: "white" }}
        onChangeText={setPassword}
        containerStyle={{ width: "90%" }}
        inputContainerStyle={{ paddingHorizontal: 10 }}
        placeholder="**********"
        rightIcon={<FontAwesome5 name="lock" size={24} color="white" />}
      />

      <Button
        onPress={LoginUser}
        buttonStyle={{ paddingVertical: 15 }}
        containerStyle={{ width: "60%", paddingVertical: 10 }}
        titleStyle={{ fontFamily: "SofiaBold", fontSize: 24 }}
        title={"Login"}
      />
      <Button type="clear" title={"Forgot Password"} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
