import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <View className="border border-neutral-800 w-4/5 self-center rounded-md flex-row  items-center">
      <Ionicons
        style={{ paddingHorizontal: 8 }}
        name="search"
        size={24}
        color="#5E5E5E"
      />
      <TextInput
        onChangeText={setSearch}
        style={{
          fontFamily: "Sofia",
          fontSize: 15,
          paddingVertical: 10,
          flex: 1,
        }}
        placeholderTextColor={"#5E5E5E"}
        placeholder="search for a note"
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
