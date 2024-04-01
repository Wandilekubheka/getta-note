import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TodoCard = ({ todo }) => {
    <TouchableOpacity activeOpacity={0.05} style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.heading}>{todo.type}</Text>
        <Text style={[styles.text, { fontFamily: "Sofia-Light" }]}>
          {todo.detail}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <View
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Text style={[styles.text, { fontFamily: "Sofia-Bold" }]}>
            {dayjs(todo.deadline).format("mm/d")}
          </Text>
          <View style={styles.circle}>
            <Text
              style={[
                styles.text,
                { fontFamily: "Sofia-Bold", color: "white" },
              ]}
            >
              0%
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodoCard;

const styles = StyleSheet.create({});
