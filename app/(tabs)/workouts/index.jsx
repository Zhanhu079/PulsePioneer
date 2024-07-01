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
      <Text className="mx-auto text-white text-2xl font-Inter font-semibold mt-10">Workouts</Text>
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
            imageUrl={images.cardio}
            muscleGroup="Cardio"
            exerciseNumber={10}
            difficulty="Beginner"
            otherStyles="mb-50"
          />
          <WorkoutCard
            imageUrl={images.hamstrings}
            muscleGroup="Upper Legs"
            exerciseNumber={10}
            difficulty="Beginner"
            otherStyles="mb-50"
          />
          <WorkoutCard
            imageUrl={images.traps}
            muscleGroup="Neck"
            exerciseNumber={2}
            difficulty="Beginner"
          />
          <WorkoutCard
            imageUrl={images.abs}
            muscleGroup="Waist"
            exerciseNumber={10}
            difficulty="Beginner"
            otherStyles="mb-50"
          />
          <WorkoutCard
            imageUrl={images.lats}
            muscleGroup="Back"
            exerciseNumber={10}
            difficulty="Beginner"
          />
          <WorkoutCard
            imageUrl={images.forearm}
            muscleGroup="Lower Arms"
            exerciseNumber={10}
            difficulty="Beginner"
          />
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
          <WorkoutCard
            imageUrl={images.calf}
            muscleGroup="Lower Legs"
            exerciseNumber={10}
            difficulty="Beginner"
            otherStyles="mb-50"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Workouts;
