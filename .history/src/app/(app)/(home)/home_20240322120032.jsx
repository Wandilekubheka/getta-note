import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import SearchInput from "../../../components/searchInput";
import FilterButtons from "../../../components/filterButtons";
import { Link } from "expo-router";
import TodoCard from "../../../components/todoCard";
import { usertoDoNotes } from "../../../backend/firestore";
import { auth, db } from "../../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FontAwesome6 } from "@expo/vector-icons";

const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const usertoDoNotes = async () => {
      const q = query(
        collection(db, "TodoNotes"),
        where("team", "==", auth.currentUser.email)
      );
      await getDocs(q)
        .then((docs) => {
          docs.forEach((doc) => {
            setTodo([...todo, doc.data()]);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    };
    usertoDoNotes();
  }, []);

  console.log(todo);
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
      <View className="mx-5">
        <FlatList
          data={todo}
          renderItem={({ item }) => <TodoCard todo={item} />}
        />
      </View>
      {/* add notes button */}
      <View className="flex-row absolute  bottom-5 right-5">
        <Link asChild href={"addNote"}>
          <TouchableOpacity className="w-15 bg-red-50 h-10 justify-center items-center">
            <FontAwesome6 name="add" size={24} color="black" />
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
