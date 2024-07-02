import { View, Text, TouchableOpacity, Image, handlePress } from 'react-native'
import { icons } from '../constants'

const CheckButton = ({ handlePress, otherStyles }) => {
  return (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlePress}
        className={`bg-customPink h-[60px] w-[60px] flex items-center justify-center rounded-lg ${otherStyles}`}
    >
        <Image 
            source={icons.check}
            resizeMode='contain'
           className="h-12 w-12"
           tintColor="#fff"
        />
    </TouchableOpacity>
  )
}

export default CheckButton