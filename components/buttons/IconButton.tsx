import { Pressable, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";

import { ToolsIcons } from "../icons/AppIcons";

import { colors } from "@/styles/colors";

type Props = {
    label: string;
    icon: string,
    onPress?: () => void;
    navigates?: boolean;
}

export default function IconButton({ label, icon, onPress, navigates }: Props) {
    const router = useRouter();

    return (
        <Pressable 
            style={({pressed}) => [{ opacity: pressed ? 0.4 : 1 }, styles.iconButton]}
            onPress={navigates ? () => router.push("/story") : onPress} 
        >
            <ToolsIcons name={icon} />
            <Text style={styles.iconText}>{label}</Text>
        </Pressable>
    );

}

const styles = StyleSheet.create({
    iconButton: {
        alignItems: "center",
    },

    iconText: {
        color: colors.primary,
        fontFamily: "Atma-Medium",
        textAlign: "center",
    },
})