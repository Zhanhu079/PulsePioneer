import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View, Image } from "react-native";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { useFonts } from 'expo-font';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Inter': require('../assets/fonts/Inter-Regular.ttf'),
        'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
        'DMSans': require('../assets/fonts/DMSans-Regular.ttf'),
        'DMSans-Bold': require('../assets/fonts/DMSans-Bold.ttf'),
      });
    
      if (!fontsLoaded) {
        return null; 
      }


  return (
    <ImageBackground
      source={images.bgImage}
      resizeMode="cover"
      className="h-full bg-primary flex flex-1 space-y-48 items-center justify-center px-5"
    >
      <StatusBar backgroundColor="#2A2E43" style="light" />
      <View className="items-center">
        <Image 
            source={images.vectorSmart}
            className="w-[90px] h-[84px] mb-5"
            resizeMode="contain"
        />
        <Text className="text-white font-semibold text-4xl font-Inter">Shape Your Body</Text>
        <Text className="text-grayfont mt-4 text-center font-DMSans">
        Embark on a journey where every sweat drop counts and every heartbeat echoes your dedication with {""} 
          <Text className="text-customPink font-semibold">Pulse Pioneer</Text>.
        </Text>
      </View>

      <View className="w-full">
        <CustomButton title="Login" handlePress={() => router.push('/sign-in')} />
        <Text className="text-grayfont text-center mt-5 font-DMSans">Don't have an account?{""} <Text onPress={() => router.push('/sign-up')} className="text-customPink">Sign up</Text></Text>
      </View>
    </ImageBackground>
  );
}
