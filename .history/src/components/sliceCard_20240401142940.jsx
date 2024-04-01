import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { ListItem } from "@rneui/themed";
const SliceCard = ({ note }) => {
  return (
    <ListItem.Swipeable containerStyle={styles.container}>
      <ListItem.Content>
        <ListItem.Title style={{ color: "red" }}>{note}</ListItem.Title>
      </ListItem.Content>

      <ListItem.Chevron iconStyle={{ color: "#0E0A0A", fontSize: 25 }} />
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
    borderRadius: 5,
    alignItems: "center",
  },
  header: {
    color: "#3C2B2B",
    fontFamily: "Sofia",
    fontSize: 14,
  },
});
