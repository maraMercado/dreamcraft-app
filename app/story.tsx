import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Platform, Pressable, TextInput } from "react-native";
import { captureRef } from "react-native-view-shot";
import { LinearGradient } from "expo-linear-gradient";

import * as Animatable from 'react-native-animatable';
import domtoimage from "dom-to-image";

import LottieView from 'lottie-react-native';

import FullModal from "@/components/full-modal/FullModal";
import Options from "@/components/buttons/OptionsButtons";
import IconButton from "@/components/buttons/IconButton";

import { age, storyLength, feelings, narrationType } from "@/data/optionsData";
import { useImageRef } from "@/context/ImageRefContext";
import { colors } from "@/styles/colors";
import { generateAPIUrl } from "@/functions/api-url";

const loadingPhrase = "Sprinkling some stardust... Your story is coming to life!";

export default function StoryScreen() {
    const imageRef = useImageRef();
    const [isFullModalOptionsVisible, setIsFullModalOptionsVisible] = useState<boolean>(false);
    const [story, setStory] = useState<string>("");

    const [chosenFeels, setChosenFeels] = useState<string>("");
    const [chosenAge, setChosenAge] = useState<string>("");
    const [chosenLength, setChosenLength] = useState<string>("");
    const [chosenNarrationType, setChosenNarrationType] = useState<string>("");
    const [chosenName, setChosenName] = useState<string>("");

    async function createStory() {
        setStory(loadingPhrase);
        let base64Image;

        if (Platform.OS !== "web") {

            try {
                base64Image = await captureRef(imageRef, {
                    result: "base64",
                });

            } catch(errorImageMobile) {
                console.error("Failed at processing image on mobile:", errorImageMobile);
                throw new Error("Unable to process the image on mobile...");
            };

        } else {

            try {
                const imagen = await domtoimage.toJpeg(imageRef.current, {
                    quality: 0.95,
                    width: 320,
                    height: 440,
                });
                base64Image = imagen.split("data:image/jpeg;base64,");
                base64Image.shift();
                base64Image = base64Image.toString();

            } catch(errorImageWeb) {
                console.error("Failed at processing image on web:", errorImageWeb);
                throw new Error("Unable to process the image on web...");
            };
        };
        
        try {
            const response = await fetch(generateAPIUrl("/api/ai"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    image: base64Image, 
                    feelings: chosenFeels, 
                    age: chosenAge,
                    length: chosenLength,
                    narrType: chosenNarrationType,
                    name: chosenName,
                }),
            });

            const data = await response.json();
            setStory(data.story);

        } catch (errorAPI) {
            console.error("Error en fetch API", errorAPI);
            throw new Error("Unable to generate the story...");
        };  
    };
    
    return (
            <>
            
                <FullModal 
                    title={"Customize your story!"} 
                    hasFilters={false}
                    isVisible={isFullModalOptionsVisible}
                    onClose={() => setIsFullModalOptionsVisible(false)}
                > 
                    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, padding: 20, }}>
                        <Options header={"Feeling...?"} data={feelings} onSelectOption={(feels: string) => setChosenFeels(feels)} />

                        <Text style={styles.header}>Main character's name...</Text>
                        <TextInput 
                            style={styles.nameInput} 
                            value={chosenName}
                            onChangeText={setChosenName}
                        />

                        <Options header={"For ages..."} data={age} onSelectOption={(age: string) => setChosenAge(age)} />
                        <Options header={"Story length..."} data={storyLength} onSelectOption={(length: string) => setChosenLength(length)} />
                        <Options header={"Narration style..."} data={narrationType} onSelectOption={(narrType: string) => setChosenNarrationType(narrType)} />

                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <IconButton onPress={() => {setIsFullModalOptionsVisible(false); createStory()}} icon="check" label="done" />
                        </View>
                    </ScrollView>
                </FullModal>

                { // Pantalla inicial
                    story === "" ? 

                        <>
                            <LinearGradient 
                            colors={[colors.gradientLight, colors.gradientDark]}
                            end={{ x: 1, y: 0.75 }}
                            style={styles.background}
                            />

                            <View style={styles.loadingContainer}>
                                <Text style={styles.loading}>Do you want to customize your story?</Text>

                                <View style={{ flexDirection: "row", gap: "20%", marginTop: 40, }}>
                                    <Pressable 
                                        style={({pressed}) => [{ opacity: pressed ? 0.4 : 1 }, styles.buttonYesNo]}
                                        onPress={() => setIsFullModalOptionsVisible(true)}
                                    >
                                        <Text style={[styles.loading, {color: "darkgreen", fontSize: 30, }]}>
                                            Yes
                                        </Text>
                                    </Pressable>

                                    <Pressable 
                                        style={({pressed}) => [{ opacity: pressed ? 0.4 : 1 }, styles.buttonYesNo]}
                                        onPress={() => createStory()}
                                    >
                                        <Text style={[styles.loading, {color: "darkred", fontSize: 30, }]}>
                                            No
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </>

                    // Si está cargando... 
                    : story === loadingPhrase ?   

                        <>
                            <LinearGradient 
                                colors={[colors.gradientLight, colors.gradientDark]}
                                end={{ x: 1, y: 0.75 }}
                                style={styles.background}
                            />
                            
                            <View style={styles.loadingContainer}>
                                {Platform.OS === "web" 
                                    ? 
                                        <Animatable.Image
                                            source={require("@/assets/lottie-animations/web-magic-book.png")} 
                                            animation="fadeIn"
                                            duration={2900}
                                            iterationCount={"infinite"}
                                            style={{ height: 150, width: 150 }}
                                        />
                                    : 
                                        <LottieView
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
                                    style={[styles.loading, { marginTop: 20, }]}
                                >
                                    {story}
                                </Animatable.Text>
                            </View>
                        </>
                    
                    // Si ya cargó la historia...
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
        fontSize: 25,
        fontFamily: "Fredoka-Medium",
        textAlign: "center",
    },

    buttonYesNo: {
        backgroundColor: colors.onPressOpacity,
        width: 95,
        height: 55,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.primary,
        justifyContent: "center",
    },

    header: {
        color: colors.primary,
        fontFamily: "Fredoka-Medium",
        fontSize: 28,
        marginBottom: 10,
        left: 3,
    },

    nameInput: {
        backgroundColor: colors.onPressOpacity,
        borderRadius: 50,
        marginBottom: 28,
        borderWidth: 1,
        borderColor: colors.primary,
        fontSize: 18,
        paddingHorizontal: 15,
        color: colors.yellow,
        fontFamily: "Fredoka-Medium",
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