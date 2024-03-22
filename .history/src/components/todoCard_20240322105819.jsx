import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TodoCard = ({ todo }) => {
  return (
    <View>
      <View>
        <Text className="text-white">{todo.title}asdsad</Text>
      </View>
      <View></View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({});
