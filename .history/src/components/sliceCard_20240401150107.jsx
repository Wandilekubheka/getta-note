import { StyleSheet } from "react-native";
import { Button, ListItem } from "@rneui/themed";
import { deleteDoc, getDoc } from "firebase/firestore";
const SliceCard = ({ note, main, docRef }) => {
  console.log(docRef);

  const deleteNote = async () => {
    if (main) {
      console.log(docRef);
      getDoc(docRef).then((doc) => {
        if (doc.exists()) doc.data;
        else {
          Alert.alert("Note Not Found");
          router.back();
        }
      });
    }
  };
  return (
    <ListItem.Swipeable
      containerStyle={styles.container}
      leftContent={(reset) => (
        <Button
          onPress={() => deleteNote()}
          icon={{ name: "check", color: "white" }}
          buttonStyle={[
            styles.container,
            { backgroundColor: "#36D94F", justifyContent: "center" },
          ]}
        />
      )}
    >
      <ListItem.Content>
        <ListItem.Title style={styles.header}>{note}</ListItem.Title>
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
