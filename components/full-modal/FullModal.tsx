import { PropsWithChildren } from "react";
import { Modal, Text, View, StyleSheet, } from "react-native";

import { FilterIcon } from "../icons/AppIcons";
import { CloseIcon } from "../icons/AppIcons";

import { colors } from "@/styles/colors";


type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
    title: string | undefined;
    hasFilters: boolean;
    onFiltersVisible?: any;
}>

export default function FullModal({isVisible, children, onClose, title, hasFilters, onFiltersVisible }: Props) {
    return (
        <View>
            <Modal
                animationType="slide"
                visible={isVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.titleContainer}>
                        <View style={{ flexDirection: "row", gap: 15}}>
                            <Text style={styles.title}>{title}</Text>
                            { hasFilters && 
                            <FilterIcon 
                                style={{ alignSelf: "center" }} 
                                onPress={onFiltersVisible}
                            />}
                        </View>
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