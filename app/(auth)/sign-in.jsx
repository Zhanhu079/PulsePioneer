import { View, Text, ScrollView, ImageBackground, Alert, ActivityIndicator } from "react-native";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { images } from "../../constants";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [loading, setLoading] = useState(false)

    const auth = FIREBASE_AUTH;

    const submit = async () => {
        setLoading(true)
        try {
          const response = await signInWithEmailAndPassword(auth, form.email, form.password);
          router.push('/home')
        } catch (error) {
          console.log(error)
          Alert.alert('Sign in failed: ' + error.message)
          ale
        } finally {
          setLoading(false)
        }
         
    }

    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //   onAuthStateChanged(FIREBASE_AUTH, (user) => {
    //     console.log('user: ', user.uid);
    //   })
    // }, [])

  return (
    <View className="h-full">
      <View className="h-[30%]">
        <ImageBackground
          source={images.loginImage}
          resizeMode="cover"
          className="h-[100%] w-full"
        ></ImageBackground>
      </View>
      <View className="w-full relative bottom-7 left-0 bg-primary border border-primary rounded-3xl py-9 px-5">
        <ScrollView
          contentContainerStyle={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text className="text-white font-semibold text-4xl font-Inter">
            Welcome back
          </Text>
          <Text className="text-grayfont mt-4 text-center font-DMSans mb-10">
            Login in to your account
          </Text>

          {loading && (
            <ActivityIndicator size="large" color="#E4447C" className="mb-5" />
          )}

          <View className="w-full">
            <FormField title="Email" value={form.email} placeholder="Email" handleChangeText={(e) => setForm({ ...form, email: e })} />

            <FormField title="Password" value={form.password} placeholder="Password" handleChangeText={(e) => setForm({ ...form, password: e })} />

            <CustomButton
              title="Continue"
              handlePress={submit}
              otherStyles="mt-5"
            />

            <Text className="text-grayfont text-center mt-7 font-DMSans">
              Don't have an account?{""}{" "}
              <Text
                onPress={() => router.push('/sign-up')}
                className="text-customPink"
              >
                Sign up
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignIn;
