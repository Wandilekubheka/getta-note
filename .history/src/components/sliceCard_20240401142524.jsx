import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { ListItem } from "@rneui/themed";
const SliceCard = ({ note }) => {
  return (
    <ListItem.Swipeable>
      <ListItem.Title>{note}</ListItem.Title>
      <ListItem.Chevron />

      <Entypo name="chevron-right" size={24} color="#3C2B2B" />
    </ListItem.Swipeable>
  );
};

export default SliceCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: "#D4C3C3",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  header: {
    color: "#3C2B2B",
    fontFamily: "Sofia",
    fontSize: 14,
  },
});
