import { Alert, StyleSheet } from "react-native";
import { Button, ListItem } from "@rneui/themed";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useRouter } from "expo-router";
import { auth, db } from "../../firebase";
import { useNotesStore } from "../features/Notes";

const SliceCard = ({ note, main, uid }) => {
  const route = useRouter();

  // const q = query(
  //   collection(db, "TodoNotes"),
  //   where("team", "==", auth.currentUser.email)
  // );
  //   getDoc(docRef).then((doc) => {
  //     if (doc.exists()) {
  //       if (main) {
  //         const docSummaryRef = query(
  //           collection(db, "TodoNotes"),
  //           where("time", "==", uid)
  //         );
  //         getDoc(docSummaryRef)
  //           .then((doc_) => console.log(doc_.data()))
  //           .catch((err) => console.log(err));
  //         // deleteDoc(docSummaryRef).then(() => route.push("/Home"));
  //       }
  //       // deleteDoc(docSummaryRef).then(() => {
  //       //     alert("deleted");
  //       //     deleteDoc(docRef)
  //       //       .then(() => {
  //       //         console.log("deleted2");
  //       //         route.back();
  //       //       })
  //       //       .catch((err) => Alert.alert(err));
  //       //   });
  //       // } else {
  //       //   let data = doc.data();
  //       //   data.subProblem = data.subProblem.filter((value) => value !== note);
  //       //   setDoc(docRef, data);
  //       // }
  //     } else {
  //       Alert.alert("Note Not Found");
  //       route.replace("/home");
  //     }
  //   });
  // };
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
