import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import FilterButton from "./filterButton";
import { useFilterStore } from "../features/Notes";

const FilterButtons = () => {
  const changeFilter = useFilterStore((state) => state.changeFilter);
  const filter = useFilterStore((state) => state.filter);
  const [active, setActive] = useState(filter);

  useEffect(() => {
    changeFilter(active);
  }, [active]);
  return (
    <View className="flex-row justify-evenly my-8">
      <TouchableOpacity
        onPress={() => {
          if (active === "personal") {
            setActive("all");
          } else {
            setActive("personal");
          }
        }}
      >
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
      <TouchableOpacity
        onPress={() => {
          if (active === "work") {
            setActive("all");
          } else {
            setActive("work");
          }
        }}
      >
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
      <TouchableOpacity
        onPress={() => {
          if (active === "team") {
            setActive("team");
          } else {
            setActive("team");
          }
        }}
      >
        <FilterButton
          active={active}
          name="team"
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
