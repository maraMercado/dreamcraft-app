import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "@/styles/colors";

import DesignCard from "@/components/DesignCard";


export default function HomeScreen() {
  return (
      <View style={styles.mainContainer}>

        <LinearGradient 
          colors={[colors.gradientDark, "transparent"]}
          style={styles.background}
        />

        <View style={styles.headerContainer}>
          <Image 
            style={styles.headerImage} 
            source={require("@/assets/images/header-image.png")} 
          />
        </View>

        <View style={styles.designContainer}>
          <Link href="/tutorial" asChild>

            <Pressable>
            {({ pressed }) => (
              <Text style={[styles.textStart, pressed && {color: colors.yellow}]}>
                New? Start here ➜
              </Text>
            )}
            </Pressable>

          </Link>
          <DesignCard />
        </View>

        <View style={styles.storiesContainer}>

        </View>
        
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.gradientLight,
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  headerContainer: {
    flex: 1/3,
    width: "100%",
  },

  headerImage: {
    width: "100%",
    height: "100%",
    minHeight: 100,
    maxHeight: 200,
    resizeMode: "contain",
  },

  designContainer: {
    flex: 1/3,
  },

  textStart: {
    color: colors.primary,
    fontFamily: "Fredoka-Medium",
    fontSize: 15,
    left: 10,
    bottom: 15,
  },

  storiesContainer: {
    flex: 2/3,
  }
})