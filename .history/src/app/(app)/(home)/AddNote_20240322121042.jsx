import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { useState } from "react";
import { Stack } from "expo-router";
import { Input } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";
import { auth } from "../../../../firebase";
import { createUserTodoNote } from "../../../backend/firestore";
import { FontAwesome6 } from "@expo/vector-icons";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [subProblem, setSubProblem] = useState("");
  const [subProblems, setSubProblems] = useState([]);
  const [teamEmail, setTeamEmail] = useState("");
  const [team, setTeam] = useState([auth.currentUser?.email]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Personal", value: "personal" },
    { label: "Work", value: "work" },
    { label: "Team", value: "team" },
  ]);
  const formFilled = () => {
    if (
      title !== "" &&
      deadline !== "" &&
      description !== "" &&
      value !== null
    ) {
      return true;
    }
    return false;
  };

  const addSubProblem = () => {
    if (subProblem === "") {
      setSubProblem("");
      Alert.alert("Can't add an Empty Sub Problem ");
      return;
    }
    if (!formFilled()) {
      setSubProblem("");
      Alert.alert("Please fill in All fields first");
      return;
    }
    setSubProblems([...subProblems, subProblem]);
    setSubProblem("");
  };

  return (
    <ScrollView className=" bg-stone-950 flex-1 ">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Add A Note",
          headerTitleStyle: {
            color: "white",
            fontFamily: "Sofia",
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: "#0c0a09",
          },
        }}
      />
      <View className="px-5 ">
        <View className="gap-10">
          <View>
            <Text className=" text-neutral-500" style={{ fontFamily: "Sofia" }}>
              Title
            </Text>
            <TextInput
              className=" py-2 px-2 border border-neutral-500 rounded-md"
              placeholderTextColor={"#5E5E5E"}
              value={title}
              onChangeText={setTitle}
              placeholder="Add to do Title"
            />
          </View>
          <View>
            <Text
              className=" text-neutral-500 pb-3"
              style={{ fontFamily: "Sofia" }}
            >
              type
            </Text>
            <DropDownPicker
              placeholder=""
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
          {value === "team" && (
            <View>
              <Text
                className=" text-neutral-500"
                style={{ fontFamily: "Sofia" }}
              >
                Invite
              </Text>
              <Input
                value={teamEmail}
                onChangeText={setTeamEmail}
                placeholder="TeamMate email"
              />
              <TouchableOpacity
                onPress={() => {
                  if (teamEmail.includes("@")) {
                    setTeam([...team, teamEmail]);
                  }
                }}
                className="w-15 bg-red-50 h-10 justify-center items-center"
              >
                <Text className="  bg-neutral-800 text-5xl text-white">+</Text>
              </TouchableOpacity>
            </View>
          )}
          <View>
            <Text className=" text-neutral-500" style={{ fontFamily: "Sofia" }}>
              Deadline
            </Text>
            <Input
              value={deadline}
              onChangeText={setDeadline}
              placeholder="deadline"
            />
          </View>
          <View>
            <Text className=" text-neutral-500" style={{ fontFamily: "Sofia" }}>
              Description
            </Text>
            <Input
              value={description}
              onChangeText={setDescription}
              placeholder="Add To Do Description"
            />
          </View>
          <View>
            <Text className=" text-neutral-500" style={{ fontFamily: "Sofia" }}>
              Sub Problem
            </Text>
            <Input
              value={subProblem}
              onChangeText={setSubProblem}
              placeholder="Add Sub Problems"
            />
            <TouchableOpacity
              onPress={addSubProblem}
              className="w-15 bg-red-50 h-10 justify-center items-center"
            >
              <Text className="  bg-neutral-800 text-5xl text-white">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex-row absolute  bottom-5 right-5">
        <TouchableOpacity
          onPress={() =>
            createUserTodoNote(title, deadline, team, value, subProblem)
          }
          className="w-12 h-12 bg-neutral-800 justify-center items-center rounded-md"
        >
          <FontAwesome6 name="check" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddNote;
