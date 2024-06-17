import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const BackButton = ({ handlePress }) => {
  return (
    <View>
      <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className="w-[25px]  mt-5 mb-10"
        >
            <Image 
                source={require('../assets/images/back.png')}
                resizeMode="contain"
                className="h-[25px] w-[25px]"
                tintColor="#454F63"
            />
        
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
