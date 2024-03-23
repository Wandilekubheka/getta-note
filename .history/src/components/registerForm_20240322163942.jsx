import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input } from "@rneui/base";
import { Button } from "@rneui/themed";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const CreateUser = () => {
    if (fullName.trim() !== "" && email.includes("@") && password.length > 7)
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          user.displayName = fullName;
          user.photoURL =
            "https://images.unsplash.com/photo-1710756115964-f949e92b97fb";
        })
        .catch((err) => {
          Alert.alert(err.message);
        });
  };
  return (
    <View className=" w-full items-center">
      <Input
        inputStyle={{ fontFamily: "Sofia", color: "white" }}
        onChangeText={setFullName}
        containerStyle={{ width: "90%" }}
        inputContainerStyle={{ paddingHorizontal: 10 }}
        placeholder="Full Name"
        rightIcon={<FontAwesome5 name="user-alt" size={24} color="white" />}
      />
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
        onPress={() => CreateUser()}
        buttonStyle={{ paddingVertical: 15 }}
        containerStyle={{ width: "60%", paddingVertical: 10 }}
        titleStyle={{ fontFamily: "SofiaBold", fontSize: 24 }}
        title={"Register"}
      />
    </View>
  );
};

export default RegisterForm;
