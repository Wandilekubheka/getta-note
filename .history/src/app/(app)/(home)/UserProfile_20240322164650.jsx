import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { auth } from "../../../../firebase";
import { TouchableOpacity } from "react-native-web";

const UserProfile = () => {
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
      <View></View>
    </View>
  );
};

export default UserProfile;
