import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Greeting from "../../components/Greeting";
import FeaturedCard from "../../components/FeaturedCard";
import { images } from "../../constants";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-primary-100 pb-50">
      <Greeting name="Bohlale" />

      <View className="bg-primary h-full flex items-center rounded-3xl py-7">
        <Text className="text-grayfont text-lg">Featured Workouts</Text>

        <ScrollView
          contentContainerStyle={{
            width: "100%",
            borderRadius: 10,
          }}
          showsVerticalScrollIndicator={false}
        >
          <FeaturedCard
            imageUrl={images.featured1}
            muscleGroup="Chest"
            exerciseNumber={7}
            difficulty="Medium"
          />
          <FeaturedCard
            imageUrl={images.featured2}
            muscleGroup="Biceps"
            exerciseNumber={10}
            difficulty="Beginner"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
