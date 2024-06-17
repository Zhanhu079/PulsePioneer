import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, otherStyles }) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className="bg-customPink w-full items-center py-3 rounded-lg"
    >
        <Text className="text-white font-semibold text-lg">{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton