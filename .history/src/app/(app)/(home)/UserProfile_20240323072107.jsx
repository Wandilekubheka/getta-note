import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { auth } from "../../../../firebase";
import { Ionicons } from "@expo/vector-icons";

const UserProfile = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");
  return (
    <View className="flex-1 bg-stone-950 justify-around items-center">
      <View className=" items-center gap-10 ">
        <View className="rounded-full bg-fuchsia-50 border-2 border-blue-400">
          <Image
            className=" rounded-full"
            style={{
              width: 200,
              height: 200,
              backgroundColor: "red",
            }}
            source={{ uri: auth.currentUser.photoURL }}
          />
          <TouchableOpacity
            style={{ backgroundColor: "#D9D9D9" }}
            className=" absolute bottom-3 right-3 w-8 bg-red-700 h-8 items-center justify-center rounded-full "
          >
            <Ionicons name="pencil-sharp" size={24} color="#3C2B2B" />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontFamily: "SofiaBold",
            fontSize: 16,
            color: "#D4C3C3",
          }}
        >
          {auth.currentUser.displayName}
        </Text>
      </View>
      <View>
        <View className=" mb-8 w-3/5 px-5 flex-row border border-neutral-500 rounded-md mt-2 justify-between items-center">
          <TextInput
            className=" py-2   flex-1 "
            style={{
              fontFamily: "SofiaLight",
              fontSize: 15,
              color: "#5E5E5E",
            }}
            placeholderTextColor={"#5E5E5E"}
            value={password}
            onChangeText={setPassword}
            placeholder="New Password"
          />
          <Ionicons name="lock-closed" size={20} color="#AFAFAF" />
        </View>

        <View className=" w-3/5 px-5 flex-row border border-neutral-500 rounded-md mt-2 justify-between items-center">
          <TextInput
            className=" py-2   flex-1 "
            style={{
              fontFamily: "SofiaLight",
              fontSize: 15,
              color: "#5E5E5E",
            }}
            placeholderTextColor={"#5E5E5E"}
            value={confirmPassword}
            onChangeText={SetConfirmPassword}
            placeholder="Confirm password"
          />
          <Ionicons name="lock-closed" size={20} color="#AFAFAF" />
        </View>
        <View className="items-center mt-10 ">
          <TouchableOpacity
            style={{
              backgroundColor: "#242424",
              paddingVertical: 7,
              paddingHorizontal: 21,
            }}
            className=" rounded-md"
          >
            <Text
              style={{ color: "#FF0A0A", fontFamily: "Sofia", fontSize: 15 }}
            >
              change Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
