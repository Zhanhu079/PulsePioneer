import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import { router } from "expo-router";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

const SignUp = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })

    const submit = () => {
        console.log(form)
        router.push('/home')
    }

  return (
    <SafeAreaView className="h-full bg-primary px-5">
      <BackButton handlePress={() => router.push("/")} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Text className="text-white font-semibold text-4xl font-Inter text-center mb-16">
          Create an account
        </Text>

        <View>
          <FormField 
            title="Username"
            value={form.username}
            placeholder="Username"
            handleChangeText={(e)=>setForm({ ...form, username: e })}
          />
          <FormField 
            title="Email"
            value={form.email}
            placeholder="Email"
            handleChangeText={(e)=>setForm({ ...form, email: e })}
          />
          <FormField 
            title="Password"
            value={form.password}
            placeholder="Password"
            handleChangeText={(e)=>setForm({ ...form, password: e })}
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
