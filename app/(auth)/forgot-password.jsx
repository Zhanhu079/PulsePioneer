import { View, Text, Alert, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import { router } from "expo-router";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const submit = async () => {
    setLoading(true);
    try {
        await sendPasswordResetEmail(auth, email);
        Alert.alert("Password reset email sent! Check your emails.")
    } catch (error) {
        Alert.alert("There was a problem:", error.message)
    } finally {
        setLoading(false)
        router.push('/sign-in')
    }
  }

  return (
    <SafeAreaView className="h-full bg-primary px-5">
      <BackButton handlePress={() => router.push("/sign-in")} />
      <View className="mt-20 flex items-center px-3">
        <Text className="text-white text-3xl font-Inter">
          Reset your password
        </Text>
        <Text className="text-[15rem] text-grayfont text-center tracking-wider mt-3">
          Please enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        {loading && (
            <ActivityIndicator size="large" color="#E4447C" className="my-5" />
          )}
        <FormField
          title="Email"
          value={email}
          placeholder="Your Email"
          handleChangeText={(e) => setEmail(e)}
          otherStyles="mt-10"
        />
        <CustomButton
            title="Continue"
            handlePress={submit}
            otherStyles="mt-5"
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
