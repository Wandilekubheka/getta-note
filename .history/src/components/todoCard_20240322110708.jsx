import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TodoCard = ({ todo }) => {
  return (
    <View className="flex-row mx-10 w-3/5">
      <View>
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
