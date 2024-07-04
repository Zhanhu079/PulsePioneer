import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
        <Stack.Screen name="termsandconditions" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#2A2E43" style="light" />
    </>
  );
};

export default AuthLayout;
