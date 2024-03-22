import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import FilterButton from "./filterButton";

const FilterButtons = () => {
  const [active, setActive] = useState("all");
  return (
    <View className="flex-row justify-evenly">
      <TouchableOpacity>
        <FilterButton
          active={active}
          name="personal"
          bgcolor={"rgba(255,10,10,0.1)"}
          icon={<FontAwesome5 name="user-alt" size={20} color="white" />}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FilterButton active={active} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FilterButton active={active} />
      </TouchableOpacity>
    </View>
  );
};

export default FilterButtons;

const styles = StyleSheet.create({});
