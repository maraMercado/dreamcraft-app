import React, { useState, useEffect } from "react";
import { View, FlatList, Pressable, Text, StyleSheet } from "react-native";

import { db, auth } from "@/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { colors } from "@/styles/colors";
import { router } from "expo-router";

export default function StoriesScreen() {
  const [texts, setTexts] = useState<string[]>([]);

  const getUserTexts = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.error("No hay usuario autenticado");
      return [];
    }
  
    try {
      const q = query(collection(db, "userTexts"), where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      const texts = querySnapshot.docs.map(doc => doc.data().text);
      
      return texts; 
    } catch (error) {
      console.error("Error obteniendo textos:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchTexts = async () => {
      const userTexts = await getUserTexts();
      setTexts(userTexts);
    };
    fetchTexts();
  }, []);
    
  return (
    <View style={styles.background}>
       <FlatList
        data={texts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => 
          <Pressable key={`${index}`} style={styles.cards} onPress={() => router.push({ pathname: "/storyDetails", params: { text: item }})}>
            <Text key={`${index}`} style={styles.title}>
              {`Historia ${index}`}
            </Text>
          </Pressable>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: colors.mediumBlue,
      padding: 20,
    },

    title: {
      color: colors.primary,
      fontFamily: "Fredoka-Medium",
      fontSize: 20,
    },

    cards: {
      backgroundColor: colors.onPressOpacity,
      marginBottom: 20,
      width: 150,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
    },
});
