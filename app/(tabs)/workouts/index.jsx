import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const Workouts = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <Text>Workouts Screen</Text>
      <Link href="workouts/1">Go to workout details</Link>
    </SafeAreaView>
  )
}

export default Workouts