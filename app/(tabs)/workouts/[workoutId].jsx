import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import BackButton from "../../../components/BackButton";
import { router } from "expo-router";
import axios from "axios";
import { useEffect } from "react";

const WorkoutDetails = () => {
  const { workoutId } = useLocalSearchParams();

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://api.api-ninjas.com/v1/exercises?muscle=${workoutId}`,
      headers: { 'X-Api-Key': 'f8frhEviSRwQ7hXnBfdCYg==T3jzXXok04AtuDZJ'},
      responseType: 'json'
    }).then((response) => {
      console.log(response.data[0].name)
    })
  }, [workoutId])



  return (
    <SafeAreaView className="h-full bg-primary px-5">
      <BackButton
        handlePress={()=>router.push('/workouts')}
      />

      <Text className="text-center">Workout Details: {workoutId}</Text>
    </SafeAreaView>
  );
};

export default WorkoutDetails;
