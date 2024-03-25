import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";

const SliceCard = () => {
  return (
    <ListItem>
      <ListItem.Title style={{ color: "white" }}>
        This is a random title of the problem i slided but never had lol.
      </ListItem.Title>
    </ListItem>
  );
};

export default SliceCard;

const styles = StyleSheet.create({});
