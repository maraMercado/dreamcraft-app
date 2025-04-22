import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/styles/colors";

export default function TextDetailScreen() {
  const { text } = useLocalSearchParams();  

  return (
    <>
      <LinearGradient 
        colors={["#759DE3", "#29A8E3"]}
        end={{ x: 1, y: 0.75 }}
        style={styles.background}
    />
    
    <View style={{ flex: 1}}>
        <ScrollView 
            style={styles.storyContainer}
            contentContainerStyle={{ paddingBottom: 75, flexGrow: 1, }} 
            showsVerticalScrollIndicator={false} 
            keyboardShouldPersistTaps="handled"
      >
         <Text style={styles.story}>{text}</Text>
      </ScrollView>                       
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
  },

  storyContainer: {
      flex: 1,
  },
  
  story: {
      flexShrink: 1,
      color: colors.primary,
      fontSize: 20,
      fontFamily: "Fredoka-Medium",
      padding: 35,
  },
  
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
});