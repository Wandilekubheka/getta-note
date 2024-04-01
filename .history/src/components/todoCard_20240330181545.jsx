import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Touchable,
  TouchableWithoutFeedback,
} from "react-native";
import dayjs from "dayjs";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Link, useRouter } from "expo-router";

// import CircularProgress from "react-native-circular-progress-indicator";

const TodoCard = ({ todo }) => {
  const router = useRouter();
  const percentComplete = () => {
    if (todo.subProblem > 0) {
      return Math.floor((todo.subProblemCompleted / todo.subProblem) * 100);
    } else {
      return todo.subProblemCompleted === 0 ? 0 : 100;
    }
  };
  const getColor = () => {
    if (percentComplete_ < 30) return "#F60000";
    else if (percentComplete_ < 60) return "#FF5C00";
    else return "#36D94F";
  };
  const percentComplete_ = percentComplete();

  const tintColor = getColor();

  return (
    <Link
      asChild
      // onPress={() => router.navigate("viewNote")}
      href={"viewNote"}
      activeOpacity={0.05}
      style={styles.container}
    >
      <TouchableOpacity>
        <View style={styles.leftContainer}>
          <Text style={styles.heading}>{todo.type}</Text>
          <Text style={[styles.text, { fontFamily: "SofiaLight" }]}>
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
              <AnimatedCircularProgress
                size={80}
                width={8}
                fill={percentComplete_}
                tintColor={tintColor}
                backgroundColor="#3E3E3E"
                rotation={0}
                lineCap="round"
              >
                {() => (
                  <Text
                    className="text-white"
                    style={{ fontFamily: "SofiaBold", fontSize: 15 }}
                  >{`${percentComplete_}%`}</Text>
                )}
              </AnimatedCircularProgress>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    backgroundColor: "rgba(36,36,36,0.5)",
    opacity: 0.5,
    height: Dimensions.get("window").width / 2.5,
    padding: 20,
    borderRadius: 20,
  },
  text: {
    color: "#A6A6A6",
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
    // backgroundColor: colors.circleBackground,
    width: 70,
    aspectRatio: 1,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
});
