import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TodoCard = ({ todo }) => {
  return (
    <View className=" bg-red-700 flex-row">
      <View className="flex2">
        <Text className="text-white">{todo.type}</Text>

        <Text className="text-white">{todo.title}</Text>
      </View>
      <View>
        <Text className="text-white">{todo.deadline}</Text>
      </View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({});
