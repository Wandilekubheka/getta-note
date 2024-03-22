import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FilterButton from "./filterButton";

const FilterButtons = () => {
  const [active, setActive] = "all";
  return (
    <View>
      <TouchableOpacity>
        <FilterButton active={active} />
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
