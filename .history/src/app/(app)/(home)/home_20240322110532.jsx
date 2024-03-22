import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import SearchInput from "../../../components/searchInput";
import FilterButtons from "../../../components/filterButtons";
import { Link } from "expo-router";
import TodoCard from "../../../components/todoCard";

const Home = () => {
  const todo = [
    {
      title: "obscure Latin words, consectetur, from a Lorem Ip...",
      deadline: "2018-04-13 19:18",
      team: "retroff01@gmail.com",
      type: "personal",
      subProblem: 4,
      subProblemCompleted: 2,
    },
  ];
  return (
    <SafeAreaView className="flex-1 bg-stone-950">
      <View>
        <View className="flex-row self-end m-8">
          <TouchableOpacity className=" bg-neutral-800  p-3 rounded-xl">
            <FontAwesome5 name="user-alt" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <SearchInput />
        <FilterButtons />
      </View>
      <Text className="text-white ml-7" style={{ fontFamily: "Sofia" }}>
        All Notes
      </Text>

      <FlatList
        data={todo}
        renderItem={({ item }) => <TodoCard todo={item} />}
      />
      {/* add notes button */}
      <View className="flex-row absolute  bottom-5 right-5">
        <Link asChild href={"addNote"}>
          <TouchableOpacity className="w-15 bg-red-50 h-10 justify-center items-center">
            <Text className="  bg-neutral-800 text-5xl text-white">+</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
