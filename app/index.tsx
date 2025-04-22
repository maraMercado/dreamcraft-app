import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert, Pressable } from "react-native";

import { router } from "expo-router";

import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";

import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/styles/colors";

import { EmailIcon, LockIcon } from "@/components/icons/AppIcons";

export default function Index() {
    const [hasAccount, setHasAccount] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let user;

    const handleLogin = async () => {
        try {
          user = await signInWithEmailAndPassword(auth, email, password);
          setError("");

          Alert.alert("Logged in!");
    
          router.push("/(tabs)/home");
        } catch (err) {
          //@ts-ignore
          setError(err.message);
        }
      };
    
      const handleSignUp = async() => {
        try {
          user = await createUserWithEmailAndPassword(auth, email, password);
          setError("");

          Alert.alert("Your user has been created successfully!");

          router.push("/(tabs)/home");
        } catch (err) {
          //@ts-ignore
          setError(err.message);
        }
      };

    return (
        <>
            <LinearGradient 
                colors={["#759DE3", "#29A8E3"]}
                end={{ x: 1, y: 0.75 }}
                style={styles.background}
            />

            <View style={styles.mainContainer}>

                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>DreamCraft</Text>
                </View>

                <View style={styles.accessContainer}>
                    <Text style={styles.welcomeText}>Welcome!</Text>

                    <View style={styles.inputHelpWrapper}>
                        <EmailIcon />
                        <Text style={[styles.inputText, styles.inputHelp]}>Email</Text>
                    </View>
                    <TextInput 
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        style={[styles.input, styles.inputText]}
                    />

                    <View style={styles.inputHelpWrapper}>
                        <LockIcon />
                        <Text style={[styles.inputText, styles.inputHelp]}>Password</Text>
                    </View>
                    <TextInput 
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={[styles.input, styles.inputText]}
                    />
                    
                    <Pressable
                        style={({pressed}) => [{ opacity: pressed ? 0.4 : 1 }, styles.loginOrSignUpButton]}
                        onPress={() => setHasAccount(prev => !prev)}
                    >
                        <Text style={styles.loginOrSignUpText}>
                            {hasAccount ? "Don't have an account?" : "Already have an account?" } 
                            {"\ "}
                            <Text style={{color: colors.yellow}}>
                                {hasAccount ? "Sign Up!" : "Login!"}
                            </Text>
                        </Text>
                    </Pressable>

                    {error ? <Text style={styles.error}>{error}</Text> : null}

                    <Pressable
                        style={({pressed}) => [{ opacity: pressed ? 0.4 : 1 }, styles.accessButton]}
                        onPress={hasAccount ? handleLogin : handleSignUp}
                    >
                        <Text style={styles.accessText}>
                            {hasAccount ? "Login" : "Sign Up"}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },

    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },

    headerContainer: {
        flex: 1/4,
        justifyContent: "center",
        alignItems: "center",
    },

    headerText: {
        fontFamily: "Fredoka-Bold",
        fontSize: 35,
        color: colors.primary,
    },

    accessContainer: {
        flex: 3/4,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "85%",
        maxWidth: 400,
    },

    welcomeText: {
        fontFamily: "Fredoka-Medium",
        color: colors.primary,
        fontSize: 30,
    },

    input: {
        backgroundColor: colors.darkBlue,
        borderRadius: 50,
        width: "100%",
        height: 50,
        paddingHorizontal: 20,
    },

    inputHelpWrapper: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 8,
        marginTop: 25,
    },

    inputHelp: {
        paddingLeft: 10,
    },

    inputText: {
        color: colors.primary,
        fontFamily: "Fredoka-Medium",
        fontSize: 15,
    },

    loginOrSignUpButton: {
        alignSelf: "flex-start",
    },

    loginOrSignUpText: {
        color: colors.primary,
        fontFamily: "Fredoka-Medium",
        fontSize: 14,
        marginTop: 10,
    },

    error: {
        color: "#CE090A",
        fontFamily: "Fredoka-Medium",
        fontSize: 16,
        alignSelf: "flex-start",
    },

    accessButton: {
        backgroundColor: colors.blue,
        borderRadius: 20,
        width: 130,
        height: 60,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
    },

    accessText: {
        color: colors.primary,
        fontFamily: "Fredoka-Bold",
        fontSize: 25,
        textAlign: "center",
        textAlignVertical: "center",
    },
});