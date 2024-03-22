import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const FilterButton = ({ active, name, bgcolor, icon }) => {
  console.log(active === name);
  return (
    <>
      <View
        className="items-center w-10 h-10 justify-center self-center rounded-md"
        style={{
          backgroundColor:
            active === name || active === "all"
              ? bgcolor
              : "rgba(94, 94 ,94 , 0.1)",
        }}
      >
        {icon}
      </View>
      {/* get  extra light font for sofia */}
      <Text
        className="text-white text-center text-sm pt-2 "
        style={{ fontFamily: "SofiaLight" }}
      >
        {name}
      </Text>
    </>
  );
};

export default FilterButton;

const styles = StyleSheet.create({});
