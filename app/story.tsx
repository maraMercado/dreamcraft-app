import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, Platform } from "react-native";
import { captureRef } from "react-native-view-shot";
import { LinearGradient } from "expo-linear-gradient";

import * as Animatable from 'react-native-animatable';
import domtoimage from "dom-to-image";

import LottieView from 'lottie-react-native';

import { useImageRef } from "@/context/ImageRefContext";
import { colors } from "@/styles/colors";
import { generateAPIUrl } from "@/functions/api-url";

const loadingPhrase = "Sprinkling some stardust... Your story is coming to life!";

export default function StoryScreen() {
    const imageRef = useImageRef();
    const [story, setStory] = useState(loadingPhrase);

    async function createStory() {
        let base64Image;

        if (Platform.OS !== "web") {
            base64Image = await captureRef(imageRef, {
                result: "base64",
        });
        } else {
            const imagen = await domtoimage.toJpeg(imageRef.current, {
                quality: 0.95,
                width: 320,
                height: 440,
            });
            base64Image = imagen.split("data:image/jpeg;base64,");
            base64Image.shift();
            base64Image = base64Image.toString();
        }
        
        const response = await fetch(generateAPIUrl("/api/ai"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ image: base64Image}),
        });

        if (!response.ok) {
             throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        setStory(data.story);
    }

    useEffect(() => {
        createStory();
    }, [])
    
    return (
            // Nos ahorramos no renderizar scrollview si no hay texto largo
            <>
                {story === loadingPhrase ?   
                    <>
                        <LinearGradient 
                        colors={[colors.gradientLight, colors.gradientDark]}
                        end={{ x: 1, y: 0.75 }}
                        style={styles.background}
                        />
                        
                        <View style={styles.loadingContainer}>
                            {Platform.OS === "web" 
                                ? "TODO: make lottie work on web"
                                : <LottieView
                                source={require("@/assets/lottie-animations/magic-book.json")}
                                autoPlay
                                loop
                                style={{ height: 150, width: 150 }}
                                />
                            }

                            <Animatable.Text
                                animation="fadeIn"
                                duration={2900}
                                iterationCount={"infinite"}
                                style={styles.loading}
                            >{story}</Animatable.Text>
                        </View>
                    </>
                    
                    :   <>
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
                                    <Text style={styles.story}>{story}</Text>
                                </ScrollView>
                            </View>
                        </>
                }
            </>
    )
}   

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        bottom: "10%",
        padding: 30,
    },

    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },

    loading: {
        color: colors.primary,
        marginTop: 20,
        fontSize: 25,
        fontFamily: "Fredoka-Medium",
        textAlign: "center",
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
})