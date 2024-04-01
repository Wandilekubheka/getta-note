import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import dayjs from "dayjs";

const TodoCard = ({ todo }) => {
  return (
    <TouchableOpacity activeOpacity={0.05} style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.heading}>{todo.type}</Text>
        <Text style={[styles.text, { fontFamily: "Sofia-Light" }]}>
          {todo.title}
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
          <Text style={[styles.text, { fontFamily: "SofiaBold" }]}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    backgroundColor: "rbga(36,36,36d)",
    opacity: 0.5,
    marginHorizontal: 20,
    height: Dimensions.get("window").width / 2.5,
    padding: 20,
    borderRadius: 20,
  },
  text: {
    color: colors.greyText,
  },
  heading: {
    fontFamily: "Irish",
    fontSize: 20,
    color: "white",
  },
  leftContainer: {
    justifyContent: "space-around",
    flex: 2,
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  circle: {
    backgroundColor: colors.circleBackground,
    width: 70,
    aspectRatio: 1,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
});
