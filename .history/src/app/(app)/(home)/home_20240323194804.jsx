import {
  FlatList,
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
import { FontAwesome5 } from "@expo/vector-icons";
import SearchInput from "../../../components/searchInput";
import FilterButtons from "../../../components/filterButtons";
import { Link, useRouter } from "expo-router";
import TodoCard from "../../../components/todoCard";
import { auth, db } from "../../../../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { FontAwesome6 } from "@expo/vector-icons";

const Home = () => {
  const [todo, setTodo] = useState([]);
  const { width, height } = useWindowDimensions();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = () => {
      const q = query(
        collection(db, "TodoNotes"),
        where("team", "==", auth.currentUser.email)
      );
      onSnapshot(q, (querySnap) => {
        querySnap.docs.forEach((doc) => console.log(doc.data()));
      });
    };
    // console.log(todo);

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-stone-950">
      <View>
        <View className="flex-row self-end m-8">
          {/* {auth.currentUser.photoURL? } */}
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
          <Text>sadad</Text>
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
