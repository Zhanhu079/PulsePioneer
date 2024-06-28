import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "../constants";
import { useState } from "react";

const ExerciseCard = ({
  name,
  gifUrl,
  target,
  equipment,
  secondaryMuscles,
  instructions,
  otherStyles,
}) => {
    const [toggleInfo, setToggleInfo] = useState(false);

    const handleToggle = () => {
        setToggleInfo((prevToggle) => !prevToggle);
      };

  return (
    <View className="bg-primary-100 rounded-3xl w-full p-5 mb-4 pb-200 flex flex-row justify-between">
      <View className="flex justify-between">
        <Text className="font-Inter text-grayfont text-lg mb-4">{name}</Text>
        {toggleInfo && (
          <Image 
            source={{ uri: gifUrl }}
            resizeMode="cover"
            className="w-full h-[230px] mb-3 rounded-2xl"
          />
        )}
        <Text className="font-DMSans text-grayfont">Equipment: <Text className="text-customPink">{equipment}</Text></Text>
        {toggleInfo && (
            <View>
            <Text className="text-grayfont font-DMSans">Target: <Text className="text-customPink">{target}</Text></Text>
            <Text className="text-grayfont font-DMSans">Secondary Muscles: <Text className="text-customPink">{secondaryMuscles}</Text></Text>
            <Text className="text-grayfont text-md font-DMSans mt-3">{instructions}</Text>
        </View>
        )}
      </View>
      <TouchableOpacity className="absolute right-3 top-4" activeOpacity={0.3} onPress={handleToggle}>
        <Image
          source={icons.menu}
          className="h-[25px] w-[25px]"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ExerciseCard;
