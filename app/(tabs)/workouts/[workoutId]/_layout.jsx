import { Stack } from 'expo-router'

const WorkoutIdLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  )
}

export default WorkoutIdLayout