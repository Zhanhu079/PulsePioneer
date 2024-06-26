import { View, Text, Image } from 'react-native'

const ProfileCard = ({ imageUrl, title, exercisesCompleted, date, time }) => {
  return (
    <View className="p-5 bg-primary-100 flex flex-row items-center space-x-5 rounded-3xl w-full h-[30%] m-10">
      <Image 
        source={imageUrl}
        resizeMode='contain'
        className="h-[70px] w-[70px]"
      />
      <View>
        <Text className="text-grayfont font-Inter text-2xl">{title}</Text>
        <Text className="font-DMSans text-grayfont">{exercisesCompleted} workouts completed</Text>
        <Text className="font-DMSans text-grayfont mt-3">{date}      {time}</Text>
      </View>
    </View>
  )
}

export default ProfileCard