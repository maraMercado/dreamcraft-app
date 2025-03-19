import { useState } from "react";
import { Pressable, Text, StyleSheet, FlatList, Platform, Image } from "react-native";

import { colors } from "@/styles/colors";
import { customizableData } from "@/data/customizableData";


type Props = {
    onSelect: any;
    onCloseModal: () => void;
};

export default function CustomizeList({ onSelect, onCloseModal }: Props) {
    let [customizable] = useState(customizableData); 

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator = {Platform.OS === "web"}
            data={customizable}
            contentContainerStyle = {styles.listContainer}
            renderItem = {({ item }) => (
                    <Pressable
                        style={({pressed}) => [{ opacity: pressed ? 0.4 : 1 }]}
                        onPress={() => {
                            onSelect(item.text);
                            onCloseModal();
                        }}
                    >   
                        <Image style={styles.customizableImg} source={item.image} key={item.image} />
                        <Text style={styles.customizableDesc} key={item.text}>
                            {item.text}
                        </Text>
                    </Pressable>
            )}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 10,
        gap: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },


    customizableImg: {
        width: 95,
        height: 95,
        resizeMode: "contain",
    },

    customizableDesc: {
        marginTop: 5,
        fontSize: 16,
        color: colors.primary,
        fontFamily: "Fredoka-Bold",
        textAlign: "center",
    },
})