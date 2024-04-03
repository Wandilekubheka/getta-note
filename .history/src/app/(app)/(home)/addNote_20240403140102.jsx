import { Alert, Text, TouchableOpacity, View, TextInput } from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { auth, db } from "../../../../firebase";
import { FontAwesome6 } from "@expo/vector-icons";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useRouter } from "expo-router";
import dayjs from "dayjs";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { ScrollView } from "react-native";

const AddNote = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [subProblem, setSubProblem] = useState("");
  const [subProblems, setSubProblems] = useState([]);
  const [teamEmail, setTeamEmail] = useState("");
  const [team, setTeam] = useState([auth.currentUser?.email]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const options = [
    { label: "Personal", value: "personal" },
    { label: "Work", value: "work" },
    { label: "Team", value: "team" },
  ];
  const [dateTimeToggled, setDateTimeToggled] = useState(false);
  const time = dayjs().format();
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

  const createUserTodoNote = async (
    title,
    deadline,
    team,
    type,
    subProblem
  ) => {
    const data = {
      title: title,
      deadline: deadline,
      team: team[0],
      type: type,
      subProblem: subProblem.length,
      subProblemCompleted: 0,
      time: time,
    };
    addDoc(collection(db, "TodoNotes"), data)
      .then(
        setDoc(doc(db, `${auth.currentUser.uid}`, time), {
          title: title,
          description: description,
          subProblem: subProblems,
          deadline: deadline,
        })
          .then(() => {
            router.back();
          })
          .catch((err) => alert(err.message))
      )
      .catch((err) => Alert.alert(err.message));
  };

  return (
    <View className=" bg-stone-950 flex-1">
      <ScrollView nestedScrollEnabled className="flex-1 px-5 gap-10">
        <View>
          <Text className=" text-neutral-500" style={{ fontFamily: "Sofia" }}>
            Title
          </Text>
          <TextInput
            className=" py-2 px-5 border border-neutral-500 rounded-md mt-2"
            style={{
              fontFamily: "SofiaLight",
              fontSize: 15,
              color: "#5E5E5E",
            }}
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
          <TouchableOpacity
            onPress={() => setOpen(!open)}
            className=" py-3 px-5 border border-neutral-500 rounded-md mt-2"
          >
            <Text
              style={{
                fontFamily: "SofiaLight",
                fontSize: 15,
                color: "#5E5E5E",
              }}
            >
              type
            </Text>
          </TouchableOpacity>
          {open &&
            options.map((option, index) => (
              <TouchableOpacity
                onPress={() => {
                  setValue(option.value);
                  setOpen(false);
                }}
                className=" py-2 px-5 border border-neutral-500 rounded-md mt-2"
                key={index}
              >
                <Text
                  style={{
                    fontFamily: "SofiaLight",
                    fontSize: 15,
                    color: "#5E5E5E",
                  }}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
        {value === "team" && (
          <View>
            <Text className=" text-neutral-500" style={{ fontFamily: "Sofia" }}>
              Invite
            </Text>
            <TextInput
              className=" py-2 px-5 border border-neutral-500 rounded-md mt-2"
              style={{
                fontFamily: "SofiaLight",
                fontSize: 15,
                color: "#5E5E5E",
              }}
              placeholderTextColor={"#5E5E5E"}
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
          <TouchableOpacity
            onPress={() => setDateTimeToggled(!dateTimeToggled)}
            className=" py-3 px-5 border border-neutral-500 rounded-md mt-2"
          >
            <Text
              style={{
                fontFamily: "SofiaLight",
                fontSize: 15,
                color: "#5E5E5E",
              }}
            >
              Deadline
            </Text>
            {dateTimeToggled && (
              <RNDateTimePicker
                onChange={(e) => {
                  if (e.type === "set") {
                    setDeadline(dayjs(e.nativeEvent.timestamp).format());
                    setDateTimeToggled(false);
                  }
                }}
                value={new Date()}
              />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Text className=" text-neutral-500" style={{ fontFamily: "Sofia" }}>
            Description
          </Text>
          <TextInput
            className=" py-2 px-5 border border-neutral-500 rounded-md mt-2"
            style={{
              fontFamily: "SofiaLight",
              fontSize: 15,
              color: "#5E5E5E",
            }}
            placeholderTextColor={"#5E5E5E"}
            value={description}
            onChangeText={setDescription}
            placeholder="Add To Do Description"
          />
        </View>
        <View>
          <Text className=" text-neutral-500" style={{ fontFamily: "Sofia" }}>
            Sub Problem
          </Text>
          <View className=" px-5 flex-row border border-neutral-500 rounded-md mt-2 justify-between items-center">
            <TextInput
              className=" py-2  border "
              style={{
                fontFamily: "SofiaLight",
                fontSize: 15,
                color: "#5E5E5E",
              }}
              placeholderTextColor={"#5E5E5E"}
              value={subProblem}
              onChangeText={setSubProblem}
              placeholder="Add Sub Problems"
            />
            <TouchableOpacity onPress={addSubProblem}>
              <FontAwesome6 name="add" size={24} color="#262626" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() =>
          createUserTodoNote(title, deadline, team, value, subProblem)
        }
        className=" absolute bottom-5 right-5 w-12 h-12 bg-neutral-800 justify-center items-center rounded-md"
      >
        <FontAwesome6 name="check" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default AddNote;
