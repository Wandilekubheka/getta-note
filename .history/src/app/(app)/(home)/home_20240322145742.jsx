import {
  FlatList,
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
import { Link } from "expo-router";
import TodoCard from "../../../components/todoCard";
import { usertoDoNotes } from "../../../backend/firestore";
import { auth, db } from "../../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image } from "@rneui/themed";

const Home = () => {
  const [todo, setTodo] = useState([]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    // const usertoDoNotes = async () => {
    //   const q = query(
    //     collection(db, "TodoNotes"),
    //     where("team", "==", auth.currentUser.email)
    //   );
    //   await getDocs(q)
    //     .then((docs) => {
    //       docs.forEach((doc) => {
    //         setTodo([...todo, doc.data()]);
    //       });
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // };
    // usertoDoNotes();
  }, []);

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
      {todo == [] ? (
        <View className="mx-5">
          <FlatList
            data={todo}
            renderItem={({ item }) => <TodoCard todo={item} />}
          />
        </View>
      ) : (
        <View className="bg-red-50">
          <Text>sadad</Text>
          <Image
            width={width * 0.8}
            height={width * 0.8}
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
