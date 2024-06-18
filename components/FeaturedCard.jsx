import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

const FeaturedCard = ({
  imageUrl,
  muscleGroup,
  exerciseNumber,
  difficulty,
}) => {
  return (
    <View className="w-[390px] h-[190px] p-5">
      <ImageBackground
        source={imageUrl}
        resizeMode="cover"
        className="flex flex-1 overflow-hidden rounded-3xl"
      >
        <View
          className="flex flex-1 p-5"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Text className="text-grayfont text-[30rem] font-Inter">
            {muscleGroup}
          </Text>
          <Text className="text-grayfont text-[15rem] font-DMSans mb-4">
            {exerciseNumber} Exercises
          </Text>
          <View
            style={{
              backgroundColor: "rgba(228, 68, 124, 0.5)",
            }}
            className="bg-customPink w-[50%] p-2 flex items-center rounded-2xl"
          >
            <Text className="text-white font-DMSans text-xs">
              {difficulty} Difficulty
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FeaturedCard;
