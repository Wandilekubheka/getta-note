import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const SliceCard = () => {
  return (
    <View style={styles.container}>
      <Text className="text-white">
        This is a random title of the problem i slided but never had lol.
      </Text>
      <Entypo name="chevron-right" size={24} color="white" />
    </View>
  );
};

export default SliceCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: D4C3C3,
  },
});
