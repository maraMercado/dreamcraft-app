import { Text, Pressable, StyleSheet, View } from "react-native";

import { colors } from "@/styles/colors";
import { useState } from "react";

type Props = {
    header: string;
    data: Array<string>;
    onSelectOption: (s: string) => void;
}

export default function Options({ header, data, onSelectOption}: Props) {
    const [chosenItem, setChosenItem] = useState<string>("");

    return (
        <>
            <Text style={styles.optionsHeader}>{header}</Text>
            <View style={styles.optionsContainer}>
                {data.map((item) => 
                    <Pressable 
                        key={item}
                        style={({pressed}) => [
                            { opacity: pressed ? 0.4 : 1 }, 
                            styles.optionsButton,
                            item === chosenItem && styles.chosenItemButton
                        ]}
                        onPress={() => {
                            onSelectOption(item);
                            setChosenItem(item);
                        }}
                    >
                        <Text 
                            key={item}
                            style={[styles.optionsText, item === chosenItem && styles.chosenItemText]}
                        >
                            {item}
                        </Text>
                    </Pressable>
                )}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    optionsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 15,
        marginBottom: 30,
    },

    optionsHeader: {
        color: colors.primary,
        fontFamily: "Fredoka-Medium",
        fontSize: 28,
        marginBottom: 10,
        left: 3,
    },

    optionsButton: {
        backgroundColor: colors.gradientDark,
        justifyContent: "center",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.primary,
    },

    optionsText: {
        color: colors.primary,
        fontSize: 18,
        fontFamily: "Fredoka-Regular",
    },

    chosenItemButton: {
        backgroundColor:"#64a4d8",
        borderColor: colors.yellow,
        borderWidth: 2,
    },

    chosenItemText: {
        color: colors.yellow,
        fontFamily: "Fredoka-Medium",
    },
});