import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FilterButton from "./filterButton";

const FilterButtons = () => {
  return (
    <View>
      <TouchableOpacity>
        <FilterButton />
      </TouchableOpacity>
    </View>
  );
};

export default FilterButtons;

const styles = StyleSheet.create({});
