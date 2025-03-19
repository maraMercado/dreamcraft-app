import { PropsWithChildren } from "react";
import { Modal, Text, View, StyleSheet, Pressable } from "react-native";

import { CloseIcon } from "../icons/AppIcons";

import { colors } from "@/styles/colors";


type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
    title: string | undefined;
}>

export default function FullModal({isVisible, children, onClose, title }: Props) {
    return (
        <View>
            <Modal
                animationType="slide"
                visible={isVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <CloseIcon onPress={onClose} style={styles.title} />
                    </View>
                    {children}
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: colors.darkBlue,
    },

    titleContainer: {
        height: "8%",
        backgroundColor: colors.onPressOpacity,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        fontFamily: "Fredoka-Medium",
        fontSize: 20,
        color: colors.primary,
    },
})