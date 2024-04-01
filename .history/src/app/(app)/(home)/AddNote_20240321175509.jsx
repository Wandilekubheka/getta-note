import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Input } from "@rneui/themed";

const AddNote = () => {
  return (
    <View className=" bg-stone-950 flex-1">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleStyle: { color: "white" },
          headerStyle: {
            backgroundColor: "#0c0a09",
          },
        }}
      />
      <View>
        <Text>Title</Text>
        <Input placeholder="Add to do Title" />
      </View>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({});
