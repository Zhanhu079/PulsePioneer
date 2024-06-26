import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../../components/BackButton";
import { router } from "expo-router";
import WorkoutCard from "../../../components/WorkoutCard";
import { images } from "../../../constants";

const Workouts = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <BackButton handlePress={() => router.push("/home")} otherStyles="ml-2" />
      <Text className="mx-auto text-white text-2xl font-Inter mt-10">Workouts</Text>
      <View className="bg-primary h-full flex items-center w-full">
        <ScrollView
          contentContainerStyle={{
            width: "100%",
            borderRadius: 10,
            paddingBottom: 200,
          }}
          showsVerticalScrollIndicator={false}
        >
          <WorkoutCard
            imageUrl={images.triceps}
            muscleGroup="Triceps"
            exerciseNumber={10}
            difficulty="Intermediate"
            otherStyles="mb-50"
          />
          <WorkoutCard
            imageUrl={images.hamstrings}
            muscleGroup="Hamstrings"
            exerciseNumber={10}
            difficulty="Beginner"
            otherStyles="mb-50"
          />
          <WorkoutCard
            imageUrl={images.traps}
            muscleGroup="Traps"
            exerciseNumber={10}
            difficulty="Intermediate"
          />
          <WorkoutCard
            imageUrl={images.abs}
            muscleGroup="Abdominals"
            exerciseNumber={10}
            difficulty="Intermediate"
            otherStyles="mb-50"
          />
          <WorkoutCard
            imageUrl={images.lats}
            muscleGroup="Lats"
            exerciseNumber={10}
            difficulty="Intermediate"
          />
          <WorkoutCard
            imageUrl={images.forearm}
            muscleGroup="Forearms"
            exerciseNumber={10}
            difficulty="Intermediate"
          />
          <WorkoutCard
            imageUrl={images.chest}
            muscleGroup="Chest"
            exerciseNumber={10}
            difficulty="Intermediate"
          />
          <WorkoutCard
            imageUrl={images.biceps}
            muscleGroup="Biceps"
            exerciseNumber={10}
            difficulty="Beginner"
          />
          <WorkoutCard
            imageUrl={images.glutes}
            muscleGroup="Glutes"
            exerciseNumber={10}
            difficulty="Intermediate"
            otherStyles="mb-50"
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

export default Workouts;
