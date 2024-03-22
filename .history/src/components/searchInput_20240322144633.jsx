import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <View className="border border-neutral-800 w-4/5 self-center rounded-md bg-red-50 ">
      <Ionicons name="search" size={24} color="black" />
      <TextInput placeholder="search for a note" />
    </View>
    //   <SearchBar
    //     placeholder="Search for a note"
    //     onChangeText={setSearch}
    //     value={search}
    //     containerStyle={{
    //       width: "90%",
    //       alignSelf: "center",
    //       backgroundColor: "transparent",
    //     }}
    //     inputContainerStyle={{
    //       backgroundColor: "transparent",
    //       borderWidth: 1,
    //       borderColor: "rgba(94, 94, 94, 0.8)",
    //     }}
    //   />
    // );
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
