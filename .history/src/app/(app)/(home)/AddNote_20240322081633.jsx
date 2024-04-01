import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Input } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";

const AddNote = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <View className=" bg-stone-950 flex-1 ">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleStyle: { color: "white" },
          headerStyle: {
            backgroundColor: "#0c0a09",
          },
        }}
      />
      <View className="px-5">
        <View>
          <View>
            <Text className=" text-neutral-500" style={{ fontFamily: "Sofia" }}>
              Title
            </Text>
            <Input placeholder="Add to do Title" />
          </View>
          <View>
            <DropDownPicker
              placeholder=""
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
            >
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddNote;
