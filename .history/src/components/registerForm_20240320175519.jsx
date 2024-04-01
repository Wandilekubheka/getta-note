import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input } from "@rneui/base";
import { Button } from "@rneui/themed";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View className=" w-full items-center">
      <Input
        onChangeText={setFullName}
        containerStyle={{ width: "90%" }}
        inputContainerStyle={{ paddingHorizontal: 10 }}
        placeholder="Full Name"
        rightIcon={<FontAwesome5 name="user-alt" size={24} color="white" />}
      />
      <Input
        onChangeText={setEmail}
        containerStyle={{ width: "90%" }}
        inputContainerStyle={{ paddingHorizontal: 10 }}
        placeholder="Email"
        rightIcon={<MaterialIcons name="email" size={24} color="white" />}
      />
      <Input
        onChangeText={setPassword}
        containerStyle={{ width: "90%" }}
        inputContainerStyle={{ paddingHorizontal: 10 }}
        placeholder="**********"
        rightIcon={<FontAwesome5 name="lock" size={24} color="white" />}
      />

      <Button
        buttonStyle={{ paddingVertical: 15 }}
        containerStyle={{ width: "60%", paddingVertical: 10 }}
        titleStyle={{ fontFamily: "SofiaBold", fontSize: 24 }}
        title={"Register"}
      />
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({});
