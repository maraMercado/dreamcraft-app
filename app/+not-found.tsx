import { Link, } from "expo-router";
import { View, StyleSheet, Text} from "react-native";

import { colors } from "@/styles/colors";

export default function NotFoundScreen() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.text}>
                    Oop's! Not found... 
            </Text>
            <Link href="/">
                <Text style={[styles.text, styles.linkText]}>
                    Click me to go back home!
                </Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexWrap: "wrap",
        backgroundColor: colors.darkBlue,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
    },

    text: {
        textAlign: "center",
        textAlignVertical: "center",
        color: colors.primary,
        fontFamily: "Fredoka-Medium",
        fontSize: 30,
    },

    linkText: {
        backgroundColor: colors.onPressOpacity,
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
})