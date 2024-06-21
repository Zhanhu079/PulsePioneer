import { View, Text } from 'react-native'
import { Stack } from 'expo-router'

const WorkoutLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='[workoutId]' options={{ headerShown: false }} />
    </Stack>
  )
}

export default WorkoutLayout