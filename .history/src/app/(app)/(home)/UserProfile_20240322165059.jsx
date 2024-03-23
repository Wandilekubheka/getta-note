import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { auth } from "../../../../firebase";
import { Ionicons } from "@expo/vector-icons";

const UserProfile = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");
  return (
    <View className="flex-1 bg-stone-950 justify-around items-center">
      <View className="items-center gap-10">
        <View>
          <Image
            className=" rounded-full"
            style={{ width: 200, height: 200, backgroundColor: "red" }}
            source={{ uri: auth.currentUser.photoURL }}
          />
          <TouchableOpacity></TouchableOpacity>
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
        <View className=" px-5 flex-row border border-neutral-500 rounded-md mt-2 justify-between items-center">
          <TextInput
            className=" py-2  border "
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
          <TouchableOpacity>
            <Ionicons name="lock-closed" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className=" px-5 flex-row border border-neutral-500 rounded-md mt-2 justify-between items-center">
          <TextInput
            className=" py-2  border "
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
          <TouchableOpacity>
            <Ionicons name="lock-closed" size={24} color="#AFAFAF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
