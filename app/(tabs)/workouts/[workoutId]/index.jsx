import { View, Text, FlatList, ImageBackground } from "react-native";
import { useLocalSearchParams } from "expo-router";
import BackButton from "../../../../components/BackButton";
import { router } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";
import ExerciseCard from "../../../../components/ExerciseCard";
import { images } from "../../../../constants";
import { API_KEY } from '@env'

const WorkoutDetails = () => {
  const { workoutId } = useLocalSearchParams();
  const [exerciseList, setExerciseList] = useState([]);
  const apiKey = process.env.API_KEY

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.api-ninjas.com/v1/exercises?muscle=${workoutId}`,
      headers: { "X-Api-Key": apiKey },
      responseType: "json",
    }).then((response) => {
      const exercises = response.data;
      setExerciseList(exercises);
    });
  }, []);

  return (
    <View className="h-full bg-primary relative z-10">
      <View className="h-[30%]">
        <ImageBackground
          source={workoutId === "Chest" ? images.chest : workoutId === "Triceps" ? images.triceps : workoutId === "Hamstrings" ? images.hamstrings : workoutId === "Traps" ? images.traps : 
            workoutId === "Abdominals" ? images.abs : workoutId === "Biceps" ? images.biceps : workoutId === "Glutes" ? images.glutes : 
            workoutId === "Shoulders" ? images.shoulders : workoutId === "Forearms" ? images.forearm : images.lats
          }
          resizeMode="cover"
          className="h-full w-full flex flex-1 overflow-hidden"
        >
          <View
          className="flex flex-1 p-5"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <BackButton otherStyles="mt-6 mb-2" handlePress={() => router.push("/workouts")} />
            <Text className="text-grayfont text-2xl font-Inter">{workoutId}</Text>
            <Text className="text-grayfont font-DMSans mb-5">{exerciseList.length} Exercises</Text>
            <View
            style={{
              backgroundColor: "rgba(228, 68, 124, 0.5)",
            }}
            className="bg-customPink w-[50%] p-2 flex items-center rounded-2xl"
          >
            <Text className="text-white font-DMSans text-xs">
              Intermediate Difficulty
            </Text>
          </View>
        </View>
        </ImageBackground>
      </View>

      <View className="px-5 w-full bg-primary rounded-3xl pb-20 relative bottom-5">
        <Text className="my-10 text-grayfont text-3xl">Exercises</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{
            height: "50%",

            marginBottom: 15,
          }}
          data={exerciseList}
          renderItem={({ item }) => <ExerciseCard {...item} />}
        />
      </View>
    </View>
  );
};

export default WorkoutDetails;
