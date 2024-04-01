import { StyleSheet, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";

const DeadLinePicker = () => {
  return (
    <>
      <RNDateTimePicker value={dayjs()} mode="time" />
      <View>
        <Text>asdasd</Text>
      </View>
    </>
  );
};

export default DeadLinePicker;

const styles = StyleSheet.create({});
