import { View, Text, FlatList, ImageBackground, ActivityIndicator, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import BackButton from "../../../../components/BackButton";
import { router } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";
import ExerciseCard from "../../../../components/ExerciseCard";
import { images } from "../../../../constants";
import { FIREBASE_AUTH } from "../../../../FirebaseConfig";
import { FIRESTORE_DB } from "../../../../FirebaseConfig";
import { collection, query, where, getDocs, updateDoc, arrayUnion } from "firebase/firestore";
import { API_KEY, API_HOST, API_URL } from '@env'
import CheckButton from "../../../../components/CheckButton";

const WorkoutDetails = () => {
  const { workoutId } = useLocalSearchParams();
  const [exerciseList, setExerciseList] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.API_KEY
  const apiHost = process.env.API_HOST
  const url = process.env.API_URL

  const auth = FIREBASE_AUTH;
  const db = FIRESTORE_DB;

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
      },
      params: {
        limit: '10',
        offset: '0'
      },
    };
    
    try {
      setLoading(true);
      const response = await axios.get(apiUrl, options);
      setExerciseList(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateWorkoutsComplete = async () => {
    try {
      // Get the current signed-in user
      const user = auth.currentUser;
      if (!user) {
        throw new Error("No user is signed in");
      }
  
      // Get the user's email
      const userEmail = user.email;
  
      // Query Firestore to find the document with the user's email
      const usersCollection = collection(db, "users");
      const q = query(usersCollection, where("email", "==", userEmail));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        throw new Error("No matching user found");
      }
  
      // Assuming emails are unique, there should be only one matching document
      const userDoc = querySnapshot.docs[0];
      const userDocRef = userDoc.ref;
      const userData = userDoc.data();
  
      // Update the workoutsCompleted array in the user's document
      const newWorkout = workoutId;
      const updatedWorkoutsCompleted = [...userData.workoutsCompleted, newWorkout];
  
      await updateDoc(userDocRef, {
        workoutsCompleted: updatedWorkoutsCompleted
      });
  
      Alert.alert("Workout complete");
    } catch (error) {
      console.error("Error updating workouts completed: ", error);
    }
  }

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
        <CheckButton 
          handlePress={updateWorkoutsComplete}
          otherStyles="absolute top-[-29px] right-10"
        />
        {loading && (
            <ActivityIndicator size="large" color="#E4447C" className="my-5" />
          )}
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
