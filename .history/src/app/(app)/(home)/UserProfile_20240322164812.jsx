import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { auth } from "../../../../firebase";

const UserProfile = () => {
  return (
    <View className="flex-1 bg-stone-950 justify-around items-center">
      <View className="items-center gap-10">
        <View>
          <Image
            className=" rounded-full"
            style={{ width: 200, height: 200, backgroundColor: "red" }}
            source={{ uri: auth.currentUser.photoURL }}
          />
          <TouchableOpacity></TouchableOpacity>
        </View>

        <Text
          style={{
            fontFamily: "SofiaBold",
            fontSize: 16,
            color: "#D4C3C3",
          }}
        >
          {auth.currentUser.displayName}
        </Text>
      </View>
      <View>
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
    </View>
  );
};

export default UserProfile;
