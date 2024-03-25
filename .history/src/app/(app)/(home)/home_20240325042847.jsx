import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../../components/searchInput";
import FilterButtons from "../../../components/filterButtons";
import { Link, useRouter } from "expo-router";
import TodoCard from "../../../components/todoCard";
import { auth, db } from "../../../../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNotesStore } from "../../../features/Notes";

const Home = () => {
  const [todo, setTodo] = useState([]);
  const allTodo = useNotesStore((state) => state.notes);
  const updateNotes = useNotesStore((state) => state.fetchNotesFromDatabase);
  const { width } = useWindowDimensions();
  const router = useRouter();

  useEffect(() => {
    updateNotes(auth.currentUser.email);
    setTodo(allTodo);
  }, []);
  console.log(todo);
  console.log(todo);
  console.log(todo);

  return (
    <SafeAreaView className="flex-1 bg-stone-950">
      <View>
        <View className="flex-row self-end m-8">
          <TouchableOpacity
            onPress={() => router.push("userProfile")}
            className=" bg-neutral-900 rounded-full"
          >
            <Image
              style={{ width: 40, height: 40, borderRadius: 999 }}
              source={{ uri: auth.currentUser.photoURL }}
            />
          </TouchableOpacity>
        </View>
        <SearchInput />
        <FilterButtons />
      </View>
      <Text className="text-white ml-7 mb-2" style={{ fontFamily: "Sofia" }}>
        All Notes
      </Text>

      {todo.length > 0 ? (
        <ScrollView className="mx-5">
          {todo.map((item) => (
            <TodoCard key={item.title} todo={item} />
          ))}
        </ScrollView>
      ) : (
        <View
          style={{
            width: width * 0.8,
            height: width * 0.8,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={require("../../../assets/images/nonotes.png")}
          />
        </View>
      )}

      <View className="flex-row absolute  bottom-10 right-10">
        <Link asChild href={"addNote"}>
          <TouchableOpacity className="w-12 h-12 bg-neutral-800 justify-center items-center rounded-md">
            <FontAwesome6 name="add" size={24} color="white" />
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
