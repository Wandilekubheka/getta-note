import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import {} from "react-native-safe-area-context";
import LoginForm from "../../components/loginForm";
import { Button } from "@rneui/themed";
import RegisterForm from "../../components/registerForm";
const index = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <SafeAreaView className="flex-1 bg-stone-950 items-center ">
      <Text className="text-white">asdas</Text>
      <Text className="text-white">asdas</Text>
      <Text className="text-white">asdas</Text>
      <Text className="text-white">asdas</Text>
      <Text className="text-white">asdas</Text>
      <Text className="text-white">asdas</Text>
      <View className="gap-5 items-center flex-1 justify-center">
        <Image
          className="w-auto h-auto"
          source={require("../../assets/images/logo.png")}
        />
        <Text className="text-5xl text-white" style={{ fontFamily: "Irish" }}>
          GettaNote
        </Text>
      </View>

      <KeyboardAvoidingView behavior="padding" className=" w-full pt-32">
        {activeTab === "login" ? (
          <>
            <LoginForm />
            <View className=" flex-row justify-evenly  mt-10">
              <Button type="clear" title={"login"} />

              <Button
                onPress={() => setActiveTab("register")}
                titleStyle={{ fontFamily: "Sofia", color: "#242424" }}
                type="clear"
                title={"Register"}
              />
            </View>
          </>
        ) : (
          <>
            <RegisterForm />
            <View className=" flex-row justify-evenly mt-10 ">
              <Button
                onPress={() => setActiveTab("login")}
                titleStyle={{ fontFamily: "Sofia", color: "#242424" }}
                type="clear"
                title={"Login"}
              />
              <Button type="clear" title={"Register"} />
            </View>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
