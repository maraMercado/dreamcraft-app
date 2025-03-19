import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { Link } from "expo-router";

import { colors } from "@/styles/colors";

export default function DesignCard() {
    return (
        <View style={styles.cardContainer}>
            <View>
                <Text style={styles.title}>Design your {"\n"}own story</Text>

                <Link href="/create" asChild>
                    <TouchableOpacity 
                        style={styles.button}>
                        <>
                            <Text style={[styles.text, styles.plus]}>+</Text> 
                            <Text style={styles.text}>create</Text>
                        </>
                    </TouchableOpacity>
                </Link>
            </View>

            <Image style={styles.img} source={require("@/assets/images/moon.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.blue,
        borderRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 25,
    },
        
    title: {
        fontSize: 25,
        fontFamily: "Fredoka-Bold",
        color: colors.primary,
    },

    button: {
        backgroundColor: colors.darkBlue,
        flexDirection: "row",
        justifyContent: "center",
        gap: 7,
        marginTop: 15,
        borderRadius: 20,
        padding: 5,
        right: 5,
    },

    text: {
        color: colors.primary,
        fontFamily: "Fredoka-Bold",
        fontSize: 30,
        bottom: 2,
        right: 2,
    },

    plus: {
        color: colors.yellow,
        
    },

    img: {
        width: 135,
        height: 135,
        left: 10,
    },
})