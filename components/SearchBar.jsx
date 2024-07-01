import { View, TextInput, Image } from 'react-native'

const SearchBar = ({ value, placeholder, handleChangeText, imageUrl }) => {
  return (
    <View className="w-full h-16 bg-primary mt-6 border-2 border-primary-100 rounded-lg p-5 flex flex-row items-center justify-between focus:border-customPink">
      <TextInput 
        className="flex-1 w-full text-white font-DMSans-Bold"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#78849E"
        onChangeText={handleChangeText}
      />
      <Image 
        source={imageUrl}
        resizeMode='contain'
        className="h-7 w-7"
        tintColor="#78849E"
      />
    </View>
  )
}

export default SearchBar