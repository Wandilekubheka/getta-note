import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
const SliceCard = ({ note }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{note}</Text>
      <Entypo name="chevron-right" size={24} color="#3C2B2B" />
    </View>
  );
};

export default SliceCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#D4C3C3",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignContent: "center",
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 10,
  },
  header: {
    color: "#3C2B2B",
    fontFamily: "Sofia",
    fontSize: 14,
  },
});
