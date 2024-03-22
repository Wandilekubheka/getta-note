import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AddNote = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: true }} />
      <Text>AddNote</Text>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({});
