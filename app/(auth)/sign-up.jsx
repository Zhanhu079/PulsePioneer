import { View, Text, ScrollView, ActivityIndicator, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import { router } from "expo-router";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { collection, addDoc } from "firebase/firestore";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;
  const firestoreDb = FIRESTORE_DB;

  const submit = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log(response);
      if (response.user) {
        await updateProfile(response.user, {
          displayName: form.username, // Use the desired display name
        });
      }

      // Create a Firestore document for the user using UID as the document ID
      const docRef = await addDoc(collection(firestoreDb, "users"), {
        name: form.username,
        email: form.email,
        workoutsCompleted: [],
        savedExercises: 0
      })
      console.log("Document written with ID: ", docRef.id);

      router.push("/home");
    } catch (error) {
      console.log(error);
      Alert.alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="h-full bg-primary px-5">
      <BackButton handlePress={() => router.push("/")} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Text className="text-white font-semibold text-4xl font-Inter text-center mt-4 mb-16">
          Create an account
        </Text>

        {loading && (
          <ActivityIndicator size="large" color="#E4447C" className="mb-5" />
        )}

        <View>
          <FormField
            title="Username"
            value={form.username}
            placeholder="Username"
            handleChangeText={(e) => setForm({ ...form, username: e })}
          />
          <FormField
            title="Email"
            value={form.email}
            placeholder="Email"
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />

          <CustomButton
            title="Continue"
            handlePress={submit}
            otherStyles="mt-5"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
