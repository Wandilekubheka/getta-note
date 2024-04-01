import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SliceCard from "../../../components/sliceCard";

const ViewNote = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.MainSliceText}>
          This is a random title of the problem i slided but never had lol.
        </Text>
        <Text style={styles.subHeader}>due: 27 March 2024</Text>
      </View>
      <View className="mt-8">
        <Text style={styles.mainHeading}>Sub Tasks</Text>
        <View>
          <SliceCard />
        </View>
      </View>
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
    fontFamily: "SofiaBold",
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
