import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";
import { useState } from "react";

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles }) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <View
      className={`border border-primary-100 w-full h-16 p-4 rounded-lg bg-primary-100
    mb-2 focus:border-customPink flex-row ${otherStyles}`}
    >
      <TextInput
        className="flex-1 text-white font-DMSans-Bold w-full"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#78849E"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      {title === "Password" && (
        <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
          <Image
            source={!showPassword ? icons.eye : icons.eyeHide}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FormField;
