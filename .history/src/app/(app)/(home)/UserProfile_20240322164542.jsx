import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { auth } from "../../../../firebase";

const UserProfile = () => {
  return (
    <View className="flex-1 bg-stone-950 justify-around items-center">
      <View className="items-center">
        <View>
          <Image
            style={{ width: 200, height: 200, backgroundColor: "red" }}
            source={{ uri: auth.currentUser.photoURL }}
          />
        </View>

        <Text
          style={{
            fontFamily: "SofiaBold",
            fontSize: 16,
            color: "#D4C3C3",
            marginTop: 20,
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
