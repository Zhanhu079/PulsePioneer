import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import BackButton from "../../../components/BackButton";
import { router } from "expo-router";

const Workouts = () => {
  return (
    <SafeAreaView className="h-full bg-primary px-5">
      <BackButton
        handlePress={()=>router.push('/home')}
      />
      <Text className="mx-auto text-white text-2xl font-Inter">Workouts</Text>
      <Link className="text-blue-200 text-center" href="workouts/1">
        Go to workout details
      </Link>
    </SafeAreaView>
  );
};

export default Workouts;
