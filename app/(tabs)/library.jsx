import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Library = () => {
  return (
    <SafeAreaView className="h-full px-5 flex items-center justify-center bg-primary">
        <Text className="text-white text-3xl font-DMSans-Bold">Library Page</Text>
    </SafeAreaView>
  )
}

export default Library