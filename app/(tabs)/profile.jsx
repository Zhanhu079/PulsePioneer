import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../../FirebaseConfig";
import { router } from "expo-router";
import ProfileCard from "../../components/ProfileCard";
import { icons } from "../../constants";

const Profile = () => {
  const auth = FIREBASE_AUTH;
  const db = FIRESTORE_DB;

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [signupDate, setSignupDate] = useState("");
  const [workoutsCompleted, setWorkoutsCompleted] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("onAuthStateChanged user:", currentUser);
      if (currentUser) {
        try {
          setUser(currentUser);
          setEmail(currentUser.email || "");
          const userCreationTime = new Date(currentUser.metadata.creationTime);
          const formattedSignupDate = userCreationTime.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          setSignupDate(formattedSignupDate);

          // Fetch additional user data
          await fetchUserData(currentUser.email);
        } catch (error) {
          console.error("Error setting user data:", error);
        }
      } else {
        setUser(null);
        setEmail("");
        setSignupDate("");
        setWorkoutsCompleted(0); // Reset workoutsCompleted if no user is signed in
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const fetchUserData = async (userEmail) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", userEmail));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          console.log("User data:", userData);
          setWorkoutsCompleted(userData.workoutsCompleted || 0);
        });
      } else {
        console.log("No user found with this email");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setEmail("");
      setSignupDate("");
      setWorkoutsCompleted(0);
      Alert.alert("You have successfully signed out!");
      router.push("/");
    } catch (error) {
      Alert.alert("Error signing out:", error.message);
    }
  };

  return (
    <SafeAreaView className="h-full bg-primary p-5">
      <TouchableOpacity
        onPress={logout}
        activeOpacity={0.7}
        className="absolute right-5 top-20"
      >
        <Image
          source={icons.logout}
          resizeMode="contain"
          className="h-7 w-7"
          tintColor="#E4447C"
        />
      </TouchableOpacity>
      <View className="flex w-full items-center mt-10">
        <View className="h-[100px] w-[100px] bg-primary-100 rounded-full mb-5 flex items-center justify-center">
          <Text className="text-center text-2xl text-customPink">
            {user && user.displayName ? user.displayName.charAt(0) : ""}
          </Text>
        </View>
        <Text className="text-white text-3xl font-Inter">
          {user && user.displayName ? user.displayName : "Guest"}
        </Text>
        <Text className="text-grayfont font-DMSans my-3">
          {user ? `Member since ${signupDate}` : ""}
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ProfileCard
          imageUrl={icons.gym}
          title="Best Gym Day"
          workoutsCompleted={workoutsCompleted}
          date="10/06/2024"
          time="12:04"
        />
        <View className="w-full">
          <Text className="text-white font-Inter text-xl font-semibold mb-7">
            Support
          </Text>
          <View className="flex flex-row items-center space-x-3">
            <Image
              source={icons.mail}
              resizeMode="contain"
              className="h-5 w-5"
              tintColor="#E4447C"
            />
            <Text className="text-grayfont font-DMSans-Bold">Contact Us</Text>
          </View>

          <View className="w-full h-[1px] bg-gray-500 my-5"></View>

          <View className="flex flex-row items-center space-x-3">
            <Image
              source={icons.pencil}
              resizeMode="contain"
              className="h-5 w-5"
              tintColor="#E4447C"
            />
            <Text className="text-grayfont font-DMSans-Bold">
              Give Us Feedback
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
