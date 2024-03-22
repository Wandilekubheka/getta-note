import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const FilterButton = ({ active, name, color, bgcolor, icon }) => {
  return (
    <>
      <View className="items-center bg-slate-100 w-10 h-10 justify-center self-center rounded-md">
        <FontAwesome5 name="user-alt" size={24} color="white" />
      </View>

      <Text
        className="text-white text-center text-sm pt-2"
        style={{ fontFamily: "SofiaLight" }}
      >
        somethig
      </Text>
    </>
  );
};

export default FilterButton;

const styles = StyleSheet.create({});
