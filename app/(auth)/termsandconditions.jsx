import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TermsAndConditions = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ padding: 30 }}>
        <Text className="font-extrabold text-3xl">
          Privacy Policy for Pulse Pioneer
        </Text>
        
        <Text className="font-bold text-2xl mt-5">Introduction</Text>
        <Text className="mt-3 text-[15px]">
          Welcome to Pulse Pioneer. We value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines how
          we collect, use, and safeguard your information when you use our app
          and services.
        </Text>
        
        <Text className="font-bold text-2xl mt-5">Information We Collect</Text>
        
        <Text className="font-bold text-lg mt-5">Personal Information</Text>
        <View className="mt-3 w-full">
            <Text className="text-[15px] mb-1">
              <Text className="font-bold">Account Information:</Text> When you create an account, we collect your name, email address, and other relevant contact details.
            </Text>
            <Text className="text-[15px]">
              <Text className="font-bold">Profile Information:</Text> You may provide additional information, such as your age, gender, fitness goals, and preferences.
            </Text>
        </View>
        
        <Text className="font-bold text-lg mt-5">Usage Data</Text>
        <View className="mt-3 w-full">
            <Text className="text-[15px] mb-1">
              <Text className="font-bold">App Usage:</Text> We collect information on how you interact with our app, including the workouts you complete, your progress, and preferences.
            </Text>
            <Text className="text-[15px]">
              <Text className="font-bold">Device Information:</Text> Information about your device, such as device type, operating system, and unique device identifiers.
            </Text>
        </View>
        
        <Text className="font-bold text-lg mt-5">Location Data</Text>
        <Text className="text-[15px] mt-3">
          <Text className="font-bold">Optional Location Services:</Text> With your consent, we may collect location data to provide personalised workout recommendations and nearby gym information.
        </Text>
        
        <Text className="font-bold text-2xl mt-5">How We Use Your Information</Text>
        <View className="mt-3 w-full">
            <Text className="text-[15px] mb-1">
              <Text className="font-bold">To Provide and Improve Our Services:</Text> To personalise your experience, improve app functionality, and provide customer support.
            </Text>
            <Text className="text-[15px] mb-1">
              <Text className="font-bold">Communications:</Text> To send you updates, newsletters, and promotional materials related to Pulse Pioneer.
            </Text>
            <Text className="text-[15px]">
              <Text className="font-bold">Analytics:</Text> To analyse app usage and improve our services.
            </Text>
        </View>
        
        <Text className="font-bold text-2xl mt-5">Sharing Your Information</Text>
        <View className="mt-3 w-full">
            <Text className="text-[15px] mb-1">
              We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
            </Text>
            <Text className="text-[15px] mb-1">
              <Text className="font-bold">Service Providers:</Text> Trusted third parties who assist us in operating our app, conducting our business, or servicing you, provided they agree to keep your information confidential.
            </Text>
            <Text className="text-[15px]">
              <Text className="font-bold">Legal Requirements:</Text> When required by law or in response to valid requests by public authorities.
            </Text>
        </View>
        
        <Text className="font-bold text-2xl mt-5">Data Security</Text>
        <Text className="text-[15px] mt-3">
          We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </Text>
        
        <Text className="font-bold text-2xl mt-5">Your Rights</Text>
        <View className="mt-3 w-full">
            <Text className="text-[15px] mb-1">
              You have the right to:
            </Text>
            <Text className="text-[15px] mb-1">
              - Access and update your personal information.
            </Text>
            <Text className="text-[15px] mb-1">
              - Request deletion of your personal data.
            </Text>
            <Text className="text-[15px]">
              - Withdraw consent to data processing.
            </Text>
        </View>
        <Text className="text-[15px] mt-3">
          To exercise these rights, please contact us at keitumetse1233@gmail.com.
        </Text>
        
        <Text className="font-bold text-2xl mt-5">Changes to This Privacy Policy</Text>
        <Text className="text-[15px] mt-3">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We encourage you to review this Privacy Policy periodically for any changes.
        </Text>
        
        <Text className="font-bold text-2xl mt-5">Contact Us</Text>
        <Text className="text-[15px] mt-3">
          If you have any questions about this Privacy Policy, please contact us at:
        </Text>
        <Text className="text-[15px] mt-1">
          Pulse Pioneer
        </Text>
        <Text className="text-[15px]">
          Email: keitumetse1233@gmail.com
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndConditions;
