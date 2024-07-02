import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
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
  const [toggleHistory, setToggleHistory] = useState(false);
  const [workoutNames, setWorkoutNames] = useState([]);
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("onAuthStateChanged user:", currentUser);
      if (currentUser) {
        try {
          setUser(currentUser);
          setEmail(currentUser.email || "");
          const userCreationTime = new Date(currentUser.metadata.creationTime);
          const formattedSignupDate = userCreationTime.toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );
          setSignupDate(formattedSignupDate);

          // Fetch additional user data
          await setupUserListener(currentUser.email);
        } catch (error) {
          console.error("Error fetching user data:", error);
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

  const setupUserListener = async (userEmail) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", userEmail));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const userDocRef = doc.ref;

          // Set up real-time listener on the document
          const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              console.log("User data updated:", userData);
              setWorkoutsCompleted(userData.workoutsCompleted.length || 0);
              setWorkoutNames(userData.workoutsCompleted || []);
            }
          });

          // Return the unsubscribe function to clean up the listener when the component unmounts
          return unsubscribe;
        });
      } else {
        console.log("No user found with this email");
      }
    } catch (error) {
      console.error("Error setting up user listener:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setEmail("");
      setSignupDate("");
      setWorkoutsCompleted(0);
      setWorkoutNames([]);
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

      <View className="w-full flex items-center">
        <ProfileCard
          imageUrl={icons.gym}
          title="Progress"
          workoutsCompleted={workoutsCompleted}
          date={formattedDate}
        />
        <TouchableOpacity
          onPress={()=>setToggleHistory(!toggleHistory)}
          activeOpacity={0.7}
          className="w-full mb-5"
        >
          <View className="flex flex-row items-center space-x-3">
            <Image
              source={icons.time}
              resizeMode="contain"
              className="h-9 w-9"
              tintColor="#E4447C"
            />
            <Text className="text-grayfont font-DMSans-Bold">History</Text>
          </View>
        </TouchableOpacity>
        {toggleHistory && (
          <FlatList
            className="w-full h-[100px]"
            data={workoutNames}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text className="text-grayfont text-[15px] font-DMSans mb-2">{item}</Text>
            )}
          />
        )}
        <View className="w-full">
          <Text className="text-white font-Inter text-xl font-semibold my-7">
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
      </View>
    </SafeAreaView>
  );
};

export default Profile;
