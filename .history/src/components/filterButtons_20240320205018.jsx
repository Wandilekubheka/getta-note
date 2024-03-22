import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import FilterButton from "./filterButton";

const FilterButtons = () => {
  const [active, setActive] = useState("all");
  return (
    <View className="flex-row justify-evenly my-8">
      <TouchableOpacity>
        <FilterButton
          active={active}
          name="personal"
          bgcolor={"rgba(255,10,10,0.1)"}
          icon={
            <FontAwesome5
              name="user-alt"
              size={20}
              color={
                active === "personal" || active === "all"
                  ? "#FF0A0A"
                  : "#5E5E5E"
              }
            />
          }
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FilterButton
          active={active}
          name="work"
          bgcolor={"rgba(4,157,217,0.1)"}
          icon={
            <FontAwesome5
              name="briefcase"
              size={20}
              color={
                active === "work" || active === "all" ? "#049DD9" : "#5E5E5E"
              }
            />
          }
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FilterButton
          active={active}
          name="work"
          bgcolor={"rgba(54,217,79,0.1)"}
          icon={
            <Ionicons
              name="people-sharp"
              size={20}
              color={
                active === "team" || active === "all" ? "#36D94F" : "#5E5E5E"
              }
            />
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default FilterButtons;

const styles = StyleSheet.create({});
