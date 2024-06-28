import { View, Text, FlatList, ImageBackground } from "react-native";
import { useLocalSearchParams } from "expo-router";
import BackButton from "../../../../components/BackButton";
import { router } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";
import ExerciseCard from "../../../../components/ExerciseCard";
import { images } from "../../../../constants";
import { API_KEY, API_HOST, API_URL } from '@env'

const WorkoutDetails = () => {
  const { workoutId } = useLocalSearchParams();
  const [exerciseList, setExerciseList] = useState([]);
  const apiKey = process.env.API_KEY
  const apiHost = process.env.API_HOST
  const url = process.env.API_URL

  const fetchData = async () => {
    if (!workoutId) {
      console.error('workoutId is not defined');
      return;
    }

    const lowerCaseWorkoutId = workoutId.toLowerCase();
    const apiUrl = `${url}/bodyPart/${lowerCaseWorkoutId}`;
    console.log('API URL:', apiUrl);

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost
      }
    };
    
    try {
      const response = await axios.get(apiUrl, options);
      setExerciseList(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (workoutId) {
      fetchData();
    }
  }, [workoutId]);

  return (
    <View className="h-full bg-primary relative z-10">
      <View className="h-[30%]">
        <ImageBackground
          source={workoutId === "Chest" ? images.chest : workoutId === "Upper Arms" ? images.triceps : workoutId === "Upper Legs" ? images.hamstrings : workoutId === "Neck" ? images.traps : 
            workoutId === "Waist" ? images.abs : workoutId === "Glutes" ? images.glutes : 
            workoutId === "Shoulders" ? images.shoulders : workoutId === "Lower Arms" ? images.forearm : workoutId === "Lower Legs" ? images.calf : workoutId === "Cardio" ? images.cardio : images.lats
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
