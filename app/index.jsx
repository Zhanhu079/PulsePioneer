import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View, Image } from "react-native";
import running from "../assets/images/vectorsmart.png";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

export default function App() {
  return (
    <ImageBackground
      source={require("../assets/images/bg-image.png")}
      resizeMode="cover"
      className="h-full bg-primary flex flex-1 space-y-48 items-center justify-center px-5"
    >
      <StatusBar backgroundColor="#2A2E43" style="light" />
      <View className="items-center">
        <Image 
            source={running}
            className="w-[90px] h-[84px] mb-5"
            resizeMode="contain"
        />
        <Text className="text-white font-bold text-4xl">Shape Your Body</Text>
        <Text className="text-grayfont mt-4 text-center">
        Embark on a journey where every sweat drop counts and every heartbeat echoes your dedication with {""} 
          <Text className="text-customPink font-semibold">Pulse Pioneer</Text>.
        </Text>
      </View>

      <View className="w-full">
        <CustomButton title="LOGIN" handlePress={() => router.push('/sign-in')} />
        <Text className="text-grayfont text-center mt-5">Don't have an account?{""} <Text onPress={() => router.push('/sign-up')} className="text-customPink">Sign up</Text></Text>
      </View>
    </ImageBackground>
  );
}
