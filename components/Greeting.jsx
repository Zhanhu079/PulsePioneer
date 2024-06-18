import { View, Text } from "react-native";
import React from "react";

const Greeting = (props) => {
  return (
    <View className="mx-7 my-10">
      <Text className="text-grayfont text-3xl font-Inter">Hello</Text>
      <Text className="text-white text-3xl font-Inter">{props.name}</Text>
    </View>
  );
};

export default Greeting;
