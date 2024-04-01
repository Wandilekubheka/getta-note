import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { auth } from "../../../../firebase";

const UserProfile = () => {
  return (
    <View className="flex-1 bg-stone-950">
      <View>
        <View>
          <Image source={{ uri: auth.currentUser.photoURL }} />
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default UserProfile;
