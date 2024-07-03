import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Greeting from "../../components/Greeting";
import WorkoutCard from "../../components/WorkoutCard";
import { images } from "../../constants";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../../FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, onSnapshot } from "firebase/firestore";
import DailyTips from "../../components/DailyTips";

const Home = () => {
  const [user, setUser] = useState("");
  const [dailyInfo, setDailyInfo] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        setUser(user.displayName);
        console.log("user: ", user);
      } else {
        setUser("");
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    const fetchDailyTip = () => {
      const q = query(collection(FIRESTORE_DB, "dailytip"));
      const unsubscribeSnapshot = onSnapshot(q, (querySnapshot) => {
        const dailyTipData = [];
        querySnapshot.forEach((doc) => {
          dailyTipData.push({ id: doc.id, ...doc.data() });
        });

        if (dailyTipData.length > 0) {
          setDailyInfo(dailyTipData[0]);
        }
      });

      return unsubscribeSnapshot;
    };

    const unsubscribe = fetchDailyTip();

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView className="h-full bg-primary-100">
      <Greeting name={user} route="/profile" />

      <View className="bg-primary h-full flex items-center rounded-3xl py-7">
        <Text className="text-grayfont text-lg mb-3">
          Let's continue your fitness challenge.
        </Text>
        <ScrollView
          contentContainerStyle={{
            width: "100%",
            borderRadius: 10,
            paddingBottom: 200,
          }}
          showsVerticalScrollIndicator={false}
        >
          {dailyInfo && (
            <DailyTips
              title={dailyInfo.title}
              tip={dailyInfo.tip}
              additionalInfo={dailyInfo.additionalInfo}
            />
          )}
          <WorkoutCard
            imageUrl={images.chest}
            muscleGroup="Chest"
            exerciseNumber={10}
            difficulty="Intermediate"
          />
          <WorkoutCard
            imageUrl={images.triceps}
            muscleGroup="Upper Arms"
            exerciseNumber={10}
            difficulty="Beginner"
          />
          <WorkoutCard
            imageUrl={images.shoulders}
            muscleGroup="Shoulders"
            exerciseNumber={10}
            difficulty="Intermediate"
            otherStyles="mb-50"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
