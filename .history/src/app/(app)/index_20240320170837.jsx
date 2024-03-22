import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "../../components/loginForm";
import { Button } from "@rneui/themed";
import RegisterForm from "../../components/registerForm";
const index = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <SafeAreaView className="flex-1 bg-stone-950 items-center justify-between">
      <View className="gap-5 items-center">
        <Image
          className="w-auto h-auto"
          source={require("../../assets/images/logo.png")}
        />
        <Text className="text-5xl text-white" style={{ fontFamily: "Irish" }}>
          GettaNote
        </Text>
      </View>

      <View className="flex-1 w-full bg-red-50 justify-center">
        {activeTab === "login" ? (
          <>
            <LoginForm />
            <View className=" flex-row justify-evenly">
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
            <View className=" flex-row ">
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
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
