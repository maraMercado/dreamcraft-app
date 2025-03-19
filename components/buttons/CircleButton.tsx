import { View, Pressable, StyleSheet } from "react-native";

import { BrushIcon } from "../icons/AppIcons";

import { colors } from "@/styles/colors";

type Props = {
    onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
    return (
        <View style={styles.circleButtonContainer}>
            
            <Pressable 
                style={({pressed}) => [{ opacity: pressed ? 0.4 : 1 }, styles.circleButton]}
                onPress={onPress}
            >
                <BrushIcon />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 80,
        height: 80,
        borderWidth: 2.5,
        borderColor: colors.primary,
        borderRadius: 50,
        marginHorizontal: 60,
    },

    circleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    }
})