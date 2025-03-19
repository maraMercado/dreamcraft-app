import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';
import { useFonts } from "expo-font";

import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { ImageRefProvider } from "@/context/ImageRefContext";
import { ImageProvider } from "@/context/ImageContext";

import { colors } from "@/styles/colors";
import { fonts } from "@/styles/fonts";
import { Pressable } from "react-native";
import { ArrowIcon } from "@/components/icons/LayoutIcons";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts(fonts);
  
    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [!loaded && !error]);
    
    if (!loaded && !error) {
      return null;
    }

  return (
    <ImageRefProvider>
    <ImageProvider>

      <StatusBar 
        style="light"
        backgroundColor={colors.blue}
      />

      <Stack
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
              onPress={() => router.push("/create")}
              style={{ right: 10 }}
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
        }}
      >

        <Stack.Screen 
          name="(tabs)" 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="story" 
          options={{ title: "story" }} 
        />

        <Stack.Screen 
          name="tutorial" 
          options={{ title: "tutorial" }} 
        />

        <Stack.Screen name="+not-found" />
        
      </Stack>

    </ImageProvider>
    </ImageRefProvider>
  )
}
