import { View, Text, Pressable } from "react-native";
import { router, Tabs } from 'expo-router';

import { ArrowIcon, TabBarIcon } from "@/components/icons/LayoutIcons";

import { colors } from '@/styles/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blue,
        },

        headerTitleStyle: {
          fontFamily: "Fredoka-Medium",
          color: colors.primary,
        },

        headerLeft: () => (
          <Pressable 
            onPress={() => router.push("/")}
          >
            {({ pressed }) => (

              <ArrowIcon 
                color={ 
                  pressed 
                    ? colors.onPressOpacity 
                    : colors.primary
                }
              />

              )}
          </Pressable>
        ),

        tabBarStyle: {
          backgroundColor: colors.darkBlue,
        },

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grey,

        tabBarLabelStyle: {
          fontFamily: "Fredoka-Regular",
        },
      }}
  >

      <Tabs.Screen 
        name="home" 

        options={{
          headerShown: false,
          title: "Home",

          tabBarIcon: ({ focused }) => (
              <TabBarIcon 
                  name={focused ? "home-sharp" : "home-outline" }
                  color={focused ? colors.primary : colors.grey }
              />
            ),
          }} 
        />

      <Tabs.Screen 
        name="create" 
        options={{ 
          tabBarLabel: "",
          title: "create",
          tabBarIcon: ({focused}) => (
            <View style={{
              alignItems: "center",
              height: 60,
              width: 60,
              marginBottom: 20,
              borderRadius: 50,
              backgroundColor: colors.primary,
            }}>
              <Text style={{
                fontFamily: "Fredoka-Bold",
                color: focused ? colors.yellow : colors.grey,
                fontSize: 50,
                bottom: 10,
              }}>
                +
              </Text>
            </View>
          ),
        }} 
      />

      <Tabs.Screen 
        name="stories"
        options={{ 
          title: "My Stories", 
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "book-sharp" : "book-outline"}
              color={focused ? colors.primary : colors.grey }
            />
          ),
        }} 
      />

    </Tabs>
  );
};