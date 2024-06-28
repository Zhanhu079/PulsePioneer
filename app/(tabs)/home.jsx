import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Greeting from "../../components/Greeting";
import WorkoutCard from "../../components/WorkoutCard";
import { images } from "../../constants";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user.displayName)
      console.log('user: ', user);
    })
  }, [])


  return (
    <SafeAreaView className="h-full bg-primary-100">
      <Greeting name={user} initials="" />

      <View className="bg-primary h-full flex items-center rounded-3xl py-7">
        <Text className="text-grayfont text-lg mb-3">Featured Workouts</Text>

        <ScrollView
          contentContainerStyle={{
            width: "100%",
            borderRadius: 10,
            paddingBottom: 200
          }}
          showsVerticalScrollIndicator={false}
        >
          <WorkoutCard
            imageUrl={images.chest}
            muscleGroup="Chest"
            exerciseNumber={10}
            difficulty="Intermediate"
          />
          <WorkoutCard
            imageUrl={images.triceps}
            muscleGroup="Upper Arms"
            exerciseNumber={10}
            difficulty="Beginner"
          />
          <WorkoutCard
            imageUrl={images.shoulders}
            muscleGroup="Shoulders"
            exerciseNumber={10}
            difficulty="Intermediate"
            otherStyles="mb-50"
          /> 
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
