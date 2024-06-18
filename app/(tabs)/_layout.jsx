import { View, Text, Image } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#E4447C",
      tabBarInactiveTintColor: "#78849E",
      tabBarStyle: {
        position: 'absolute', 
        bottom: 30,         
        left: 0,              
        right: 0,             
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "white",
        borderRadius: 25,   
        marginBlock: 10,  
        marginHorizontal: 15,
        paddingTop: 22
        
      },
      tabBarShowLabel: false,
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon={icons.home} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="workout"
        options={{
          title: "Workout",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon={icons.workout} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon={icons.profile} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
