import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TodoCard = ({ todo }) => {
  return (
    <View className="">
      <View>
        <Text className="text-white">{todo.type}</Text>

        <Text className="text-white">{todo.title}</Text>
      </View>
      <View></View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({});
