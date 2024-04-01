import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Input } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [subProblem, setSubProblem] = useState("");
  const [subProblems, setSubProblems] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Personal", value: "personal" },
    { label: "Work", value: "work" },
    { label: "Team", value: "team" },
  ]);
  const formFilled = () => {
    if (
      title !== "" &&
      deadline !== "" &&
      description !== "" &&
      value !== null
    ) {
      return true;
    }
    return false;
  };
  const addSubProblem = () => {
    if (subProblem === "") {
      Alert.alert("Can't add an Empty Sub Problem ");
      return;
    }
    if (!formFilled) {
      Alert.alert("Please fill in All fields first");
      return;
    }
  };

  return (
    <View className=" bg-stone-950 flex-1 ">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Add A Note",
          headerTitleStyle: { color: "white", fontFamily: "Sofia" },
          headerStyle: {
            backgroundColor: "#0c0a09",
          },
        }}
      />
      <View className="px-5">
        <View className="gap-10">
          <View>
            <Text className=" text-neutral-500" style={{ fontFamily: "Sofia" }}>
              Title
            </Text>
            <Input onChangeText={setTitle} placeholder="Add to do Title" />
          </View>
          <View>
            <Text
              className=" text-neutral-500 pb-3"
              style={{ fontFamily: "Sofia" }}
            >
              type
            </Text>
            <DropDownPicker
              placeholder=""
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
          <View>
            <Text className=" text-neutral-500" style={{ fontFamily: "Sofia" }}>
              Deadline
            </Text>
            <Input onChangeText={setDeadline} placeholder="deadline" />
          </View>
          <View>
            <Text className=" text-neutral-500" style={{ fontFamily: "Sofia" }}>
              Description
            </Text>
            <Input
              onChangeText={setDescription}
              placeholder="Add To Do Description"
            />
          </View>
          <View>
            <Text className=" text-neutral-500" style={{ fontFamily: "Sofia" }}>
              Sub Problem
            </Text>
            <Input
              onChangeText={setSubProblem}
              placeholder="Add Sub Problems"
            />
            <TouchableOpacity
              onPress={addSubProblem}
              className="w-15 bg-red-50 h-10 justify-center items-center"
            >
              <Text className="  bg-neutral-800 text-5xl text-white">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex-row absolute  bottom-5 right-5">
        <TouchableOpacity className="w-15 bg-red-50 h-10 justify-center items-center">
          <Text className="  bg-neutral-800 text-5xl text-white">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNote;
