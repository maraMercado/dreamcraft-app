import { View, Text, StyleSheet, FlatList, Image, useWindowDimensions, Platform, Pressable } from "react-native";
import { useState } from "react";

import { colors } from "@/styles/colors";

type Props = {
    onSelect: any;
    onCloseModal: () => void;
    data: any;
};

export default function FullModalList({ onSelect, onCloseModal, data }: Props) {
    const { width } = useWindowDimensions();
    const itemWidth = Platform.OS !== "web" ? 190 : 210;
    const numColumns = Math.floor(width / itemWidth);

    return (
        <View style={styles.fullModalContainer}>
            <FlatList 
                horizontal={false}
                numColumns = {numColumns}
                key={numColumns}
                contentContainerStyle={styles.listContainer}
                columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : null}
                data={data}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false} 
                renderItem={({ item }) => (
                    <Pressable
                        style={({pressed}) => [{ opacity: pressed ? 0.4 : 1 }]}
                        onPress={() => {
                                onSelect(item.image);
                                onCloseModal();
                            }
                        }
                    >
                        <Image style={styles.imageBg} alt={item.text} source={item.image} />
                        <Text style={styles.descBg}>{item.text}</Text>  
                    </Pressable>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fullModalContainer: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    },

    listContainer: {
        gap: 35,
    },

    columnWrapper: {
        justifyContent: "flex-start",
        gap: Platform.OS !== "web" ? 25 : 40,
    },

    imageBg: {
        width: 150,
        height: 200,
        borderRadius: 26,
        resizeMode: "contain",
    },

    descBg: {
        marginTop: 5,
        fontFamily: "Fredoka-Light",
        color: colors.primary,
        fontSize: 20,
        textAlign: "center",
        maxWidth: 150,
        flexWrap: "wrap",
    },
})