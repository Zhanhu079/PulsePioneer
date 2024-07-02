import { View, Text } from "react-native";
import { Link } from "expo-router";

const Greeting = ({ name, route }) => {
  return (
    <View className="mx-7 my-10 flex flex-row items-center justify-between">
      <View>
        <Text className="text-grayfont text-3xl font-Inter">Hello</Text>
        <Text className="text-white text-3xl font-Inter">{name} 👋</Text>
      </View>
      <Link href={route}>
        <View className="bg-primary h-14 w-14 flex items-center justify-center rounded-full overflow-hidden">
          <Text className="text-center text-xl text-customPink">
            {name.charAt(0)}
          </Text>
        </View>
      </Link>
    </View>
  );
};

export default Greeting;
