import React, { useState } from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Input } from "@rneui/base";
import { Button } from "@rneui/themed";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { router } from "expo-router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = () => {
    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      alert(err.message);
    });
  };
  return (
    <Animated.View entering={FadeInLeft} className=" w-full items-center">
      <Input
        inputStyle={{ fontFamily: "Sofia", color: "white" }}
        onChangeText={setEmail}
        containerStyle={{ width: "90%" }}
        inputContainerStyle={{ paddingHorizontal: 10 }}
        placeholder="Email"
        rightIcon={<MaterialIcons name="email" size={20} color="white" />}
      />
      <Input
        secureTextEntry
        inputStyle={{ fontFamily: "Sofia", color: "white" }}
        onChangeText={setPassword}
        containerStyle={{ width: "90%" }}
        inputContainerStyle={{ paddingHorizontal: 10 }}
        placeholder="**********"
        rightIcon={<FontAwesome5 name="lock" size={20} color="white" />}
      />

      <Button
        onPress={() => LoginUser()}
        buttonStyle={{ paddingVertical: 15 }}
        containerStyle={{ width: "60%", paddingVertical: 10 }}
        titleStyle={{ fontFamily: "SofiaBold", fontSize: 24 }}
        title={"Login"}
      />
      <Button
        onPress={router.push("forgotpass")}
        type="clear"
        title={"Forgot Password"}
      />
    </Animated.View>
  );
};

export default LoginForm;
