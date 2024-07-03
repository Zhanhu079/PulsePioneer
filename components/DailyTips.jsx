import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "../constants";
import { useState } from "react";

const DailyTips = ({ title, tip, additionalInfo }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <View className="bg-primary-100 w-[340px] mx-auto rounded-lg shadow-sm p-5">
      <TouchableOpacity
        className="absolute right-3 top-2 z-10"
        activeOpacity={0.3}
        onPress={handleToggle}
      >
        <Image
          source={icons.menu}
          className="h-[25px] w-[25px]"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View className="flex flex-row items-center space-x-1">
        <Image
          source={icons.tip}
          resizeMode="contain"
          className="h-5 w-5"
          tintColor="#E4447C"
        />
        <Text className="text-white font-Inter-Bold">Daily tips</Text>
      </View>
      <View className="px-3">
        <Text className="text-grayfont font-DMSans-Bold mt-2">{title}</Text>
       
        {toggle && (
          <View>
            <Text className="text-customPink font-DMSans mt-2">
              Tip: <Text className="text-grayfont">{tip}</Text>
            </Text>
            <Text className="text-customPink font-DMSans mt-3">
              Additional info:{" "}
              <Text className="text-grayfont">{additionalInfo}</Text>
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default DailyTips;
