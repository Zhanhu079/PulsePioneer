import { View, TextInput } from 'react-native'
import React from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles }) => {
  return (
    <View className="space-y-2 border border-primary-100 w-[100%] p-4 rounded-lg bg-primary-100
    mb-2 focus:border-customPink">
      <TextInput 
        className="text-white  font-DMSans-Bold w-full"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#78849E"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password'}
      />
    </View>
  )
}

export default FormField