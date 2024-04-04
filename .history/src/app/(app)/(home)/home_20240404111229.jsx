import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../../components/searchInput";
import FilterButtons from "../../../components/filterButtons";
import { Link, useRouter } from "expo-router";
import TodoCard from "../../../components/todoCard";
import { auth } from "../../../../firebase";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  useFilterStore,
  useNotesStore,
  useSearchStore,
} from "../../../features/Notes";

const Home = () => {
  const allTodo = useNotesStore((state) => state.notes);
  const updateNotes = useNotesStore((state) => state.fetchNotesFromDatabase);
  const { width } = useWindowDimensions();
  const router = useRouter();
  const filter = useFilterStore((state) => state.filter);
  const search = useSearchStore((state) => state.search);

  useEffect(() => {
    updateNotes(auth.currentUser.email);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-stone-950 ">
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

      {allTodo.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false} className="mx-5">
          {search === ""
            ? filter === "all"
              ? allTodo.map((item) => <TodoCard key={item.title} todo={item} />)
              : allTodo
                  .filter((item) => item.type === filter)
                  .map((item) => <TodoCard key={item.title} todo={item} />)
            : allTodo
                .filter((item) => item.title.startsWith(search))
                .map((item) => <TodoCard key={item.title} todo={item} />)}
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
