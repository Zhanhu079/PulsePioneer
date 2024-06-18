import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Greeting from "../../components/Greeting";
import WorkoutCard from "../../components/WorkoutCard";
import { images } from "../../constants";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-primary-100">
      <Greeting name="Bohlale" />

      <View className="bg-primary h-full flex items-center rounded-3xl py-7">
        <Text className="text-grayfont text-lg mb-3">Let's continue your fitness challenge.</Text>

        <ScrollView
          contentContainerStyle={{
            width: "100%",
            borderRadius: 10,
            paddingBottom: 200
          }}
          showsVerticalScrollIndicator={false}
        >
          <WorkoutCard
            imageUrl={images.featured1}
            muscleGroup="Chest"
            exerciseNumber={7}
            difficulty="Medium"
          />
          <WorkoutCard
            imageUrl={images.featured2}
            muscleGroup="Biceps"
            exerciseNumber={10}
            difficulty="Beginner"
          />
          <WorkoutCard
            imageUrl={images.featured3}
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
