import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <SearchBar
      placeholder="Search for a note"
      onChangeText={setSearch}
      value={search}
      containerStyle={{
        width: "90%",
        alignSelf: "center",
        backgroundColor: "transparent",
      }}
      inputContainerStyle={{
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "rgba(94, 94, 94, 0.8)",
      }}
    />
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
