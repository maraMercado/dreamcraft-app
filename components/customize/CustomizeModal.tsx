import { PropsWithChildren } from "react";
import { Modal, View, Text, Pressable, StyleSheet, Platform } from "react-native";

import { CloseIcon } from "../icons/AppIcons";

import { colors } from "@/styles/colors";

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

export default function CustomizeModal({isVisible, children, onClose}: Props) {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.titleContainer}>

                        <Text style={styles.title}>
                            Let's design!
                        </Text>

                        <CloseIcon onPress={onClose} style={styles.title} />

                    </View>
                    {children}
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        height: "27%",
        width: Platform.OS !== "web" ? "95%" : "35%",
        backgroundColor: colors.mediumBlue,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 2,
        borderColor: colors.primary,
        position: "absolute",
        bottom: "10.5%",
        marginLeft: Platform.OS !== "web" ? "2.5%" : "35%",
    },

    titleContainer: {
        height: "25%",
        backgroundColor: colors.onPressOpacity,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        fontFamily: "Fredoka-Medium",
        fontSize: 20,
        color: "#fff",
    },
})