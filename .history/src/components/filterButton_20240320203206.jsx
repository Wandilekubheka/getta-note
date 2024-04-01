import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const FilterButton = ({ active, name, color, bgcolor, icon }) => {
  return (
    <>
      <View className="items-center bg-slate-100">
        <FontAwesome5 name="user-alt" size={24} color="white" />
      </View>

      <Text className="text-white text-center">somethig</Text>
    </>
  );
};

export default FilterButton;

const styles = StyleSheet.create({});
