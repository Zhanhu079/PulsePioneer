import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import ProfileCard from "../../components/ProfileCard";
import { icons } from "../../constants";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from "../../FirebaseConfig";

const Profile = () => {
  const db = FIRESTORE_DB;
  const [user, setUser] = useState("");
  const userInfo = FIREBASE_AUTH.currentUser;
  const signupDate = new Date(userInfo.metadata.creationTime);
  const [email, setEmail] = useState("");

  // TODO 
  // Add logout feature 

//  ----------------------------------------------------

  const [workoutsCompleted, setWorkoutsCompleted] = useState(0);

  const getUserByEmail = async () => {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          console.log('User data:', userData);
          setWorkoutsCompleted(userData.workoutsCompleted)
        });
      } else {
        console.log('No user found with this email');
      }
    } catch (error) {
      console.log('Error fetching user:', error);
    }
  };


  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user.displayName);
      setEmail(user.email);
      console.log("Email:", email);
    });

    getUserByEmail();
  }, [email]);


  const formattedSignupDate = signupDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <SafeAreaView className="h-full bg-primary p-5">
      <View className="flex w-full items-center mt-10">
        <View className="h-[100px] w-[100px] bg-white rounded-full mb-5">
          <Text className="text-center">{}</Text>
        </View>
        <Text className="text-white text-3xl font-Inter">{user}</Text>
        <Text className="text-grayfont font-DMSans my-3">
          Member since {formattedSignupDate}
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
