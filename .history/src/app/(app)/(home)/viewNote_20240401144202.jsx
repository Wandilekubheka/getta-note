import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import SliceCard from "../../../components/sliceCard";
import {
  useGlobalSearchParams,
  useLocalSearchParams,
  useRouter,
} from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../../firebase";
import dayjs from "dayjs";

const ViewNote = () => {
  const { uid } = useGlobalSearchParams();
  const [note, setNote] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const docRef = doc(db, auth.currentUser.uid, uid);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) setNote(doc.data());
      else {
        Alert.alert("Note Not Found");
        router.back();
      }
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {note !== null && (
        <>
          <View style={styles.header}>
            <Text style={styles.MainSliceText}>{note.title}</Text>
            <Text style={styles.subHeader}>
              due: {dayjs(note.deadline).format("DD MMMM YYYY")}
            </Text>
          </View>
          <View className="mt-8">
            <Text style={styles.mainHeading}>Sub Tasks</Text>
            <ScrollView style={{ paddingHorizontal: 30 }}>
              <SliceCard note={note.description} main={true} />
              {note.subProblem.length > 0 &&
                note.subProblem.map((problem, index) => (
                  <SliceCard note={problem} key={index} main={false]} />
                ))}
            </ScrollView>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default ViewNote;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 40,
    paddingTop: 30,
  },
  MainSliceText: {
    color: "#D4C3C3",
    fontFamily: "SofiaBold",
    fontSize: 20,
  },
  subHeader: {
    fontFamily: "SofiaLight",
    fontSize: 13,
    color: "rgba(212,195,195,0.6)",
    marginTop: 5,
  },
  mainHeading: {
    marginLeft: 41,
    color: "rgba(212,195,195,0.6)",
  },
  container: {
    flex: 1,
    backgroundColor: "#0E0A0A",
  },
});
