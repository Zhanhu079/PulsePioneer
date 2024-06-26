import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "../constants";
import { useState } from "react";

const ExerciseCard = ({
  name,
  type,
  muscle,
  equipment,
  difficulty,
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
        <Text className="font-DMSans text-grayfont">Equipment: <Text className="text-customPink">{equipment}</Text></Text>
        {toggleInfo && (
            <View>
            <Text className="text-grayfont font-DMSans">Type: <Text className="text-customPink">{type}</Text></Text>
            <Text className="text-grayfont font-DMSans">Muscle: <Text className="text-customPink">{muscle}</Text></Text>
            <Text className="text-grayfont font-DMSans">Difficulty: <Text className="text-customPink">{difficulty}</Text></Text>
            <Text className="text-grayfont text-md font-DMSans mt-3">{instructions}</Text>
        </View>
        )}
      </View>
      <TouchableOpacity className="absolute right-4 top-4" activeOpacity={0.3} onPress={handleToggle}>
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
