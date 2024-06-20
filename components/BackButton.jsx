import { View, Text, TouchableOpacity, Image } from "react-native";
import { icons } from '../constants'

const BackButton = ({ handlePress, otherStyles }) => {
  return (
    <View>
      <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className="w-[25px]  mt-5 mb-10"
        >
            <Image 
                source={icons.back}
                resizeMode="contain"
                className={`h-[25px] w-[25px] ${otherStyles}`}
                tintColor="#454F63"
            />
        
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
