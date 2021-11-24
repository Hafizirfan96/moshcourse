import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import moment from "moment";

const Calendar = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [selectedStartDate, setSelectedStartDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const [date, setDate] = useState(new Date(1598051730000));

  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };
  // const [isPickerShow, setIsPickerShow] = useState(false);
  // const [time, setTime] = useState(null);

  // useEffect(() => {
  //   showMode("time");
  // }, []);

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === "android") {
      setIsPickerShow(false);
    }
  };

  const showPicker = () => {
    setIsPickerShow(true);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const onDateChange = (date, type) => {
    if (type === "END_DATE") {
      setSelectedEndDate(date);
      console.log("selected end date", date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
      console.log("selected start date", date);
    }
  };

  const handlePicDate = (type) => {
    console.log("selected time is:", date);
    console.log("selected start date", selectedStartDate);
    console.log("selected end date", selectedEndDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            justifyContent: "center",
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Tap on the days you want to check in on
        </Text>
        <View>
          <CalendarPicker
            // width="100%"
            // dayOfWeekFormat={{ color: "red", fontSize: 30 }}

            dayLabelsWrapper={{
              // backgroundColor: "red",
              padding: 20,
            }}
            // dayOfWeekStyles={{}}
            yearTitleStyle={{ color: "#add8e6", fontSize: 20 }}
            monthTitleStyle={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#add8e6",
            }}
            allowRangeSelection={true}
            minDate={new Date(2019, 1, 1)}
            maxDate={new Date(2025, 1, 1)}
            weekdays={["S", "M", "T", "W", "T", "F", "S"]}
            months={[
              "January",
              "Febraury",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]}
            previousTitleStyle={{
              marginLeft: 90,
              color: "#add8e6",
              fontSize: 20,
            }}
            nextTitleStyle={{
              marginRight: 90,
              fontSize: 20,
              color: "#add8e6",
              width: 30,
            }}
            previousTitle="<"
            nextTitle=">"
            todayBackgroundColor="#e6ffe6"
            selectedDayColor="#add8e6"
            selectedDayTextColor="green"
            selectedRangeStartStyle={{
              backgroundColor: "blue",
            }}
            selectedRangeEndStyle={{
              backgroundColor: "blue",
            }}
            textStyle={{
              fontFamily: "Cochin",

              fontSize: 15,
              // fontWeight: "bold",

              color: "#000000",
            }}
            onDateChange={onDateChange}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={showDatePicker}>
            <View
              style={{
                width: 100,
                height: 40,
                marginLeft: 25,
                borderWidth: 1,
                borderRadius: 5,
                marginTop: 10,
                marginRight: -10,
              }}
            >
              <Text
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  fontSize: 20,
                  marginTop: 8,
                }}
              >
                {date
                  ? moment(date).format("hh:mm")
                  : moment(new Date()).format("hh:mm")}
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: 70,
              height: 40,
              marginLeft: 25,
              borderRadius: 5,
              backgroundColor: "#add8e6",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 20,
                marginTop: 8,
              }}
            >
              {date
                ? moment(date).format("A")
                : moment(new Date()).format(" A")}
            </Text>
          </View>

          <Text
            style={{
              justifyContent: "center",
              textAlign: "center",
              marginLeft: 10,
              marginTop: 15,
              fontSize: 15,
            }}
          >
            my local time
          </Text>
        </View>

        {/* <View style={styles.textStyle}>
          <Text style={styles.textStyle}>Selected Start Date :</Text>
          <Text style={styles.textStyle}>
            {selectedStartDate ? selectedStartDate.format("DD/MM/YYYY") : ""}
          </Text>
          <Text style={styles.textStyle}>Selected End Date : </Text>
          <Text style={styles.textStyle}>
            {selectedEndDate ? selectedEndDate.format("DD/MM/YYYY") : ""}
          </Text>
        </View> */}
      </View>

      <TouchableOpacity
        onPress={handlePicDate}
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 13,
          marginLeft: 10,
          borderRadius: 5,
          width: 350,
          height: 40,
          backgroundColor: "#add8e6",
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            fontSize: 20,
            // marginTop: 4,
          }}
        >
          Confirm
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {/* {show && (
        <DateTimePickerModal
          style={{ height: 70 }}
          testID="dateTimePicker"
          value={date}
          mode="time"
          onChange={setTime}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
          neutralButtonLabel="clear"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          isVisible={isDatePickerVisible}
        />
      )} */}
    </SafeAreaView>
  );
};
export default Calendar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: 10,
    // flex: 1,
    // paddingTop: 30,
    // backgroundColor: "#ffffff",
    // padding: 16,
    backgroundColor: "white",
  },
  textStyle: {
    marginTop: 10,
    fontSize: 17,
  },
  titleStyle: {
    // textAlign: "center",
    // fontSize: 20,
    // margin: 20,
  },
});
