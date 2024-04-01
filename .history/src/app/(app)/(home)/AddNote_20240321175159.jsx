import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AddNote = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleStyle: { color: "whtie" },
          headerStyle: {
            backgroundColor: "#0c0a09",
          },
        }}
      />
      <Text>AddNote</Text>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({});
