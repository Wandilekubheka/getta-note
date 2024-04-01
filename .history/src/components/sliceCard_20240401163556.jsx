import { Alert, StyleSheet } from "react-native";
import { Button, ListItem } from "@rneui/themed";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useRouter } from "expo-router";
import { auth, db } from "../../firebase";
const SliceCard = ({ note, main, uid }) => {
  const docRef = doc(db, auth.currentUser.uid, uid);
  const route = useRouter();
  const deleteNote = async () => {
    if (main) {
      getDoc(docRef).then((doc) => {
        if (doc.exists()) {
          deleteDoc(docRef).then(() => {});
        } else {
          Alert.alert("Note Not Found");
        }
        route.replace("/home");
      });
    } else {
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
