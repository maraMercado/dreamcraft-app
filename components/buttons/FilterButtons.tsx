import { useEffect, useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

import { backgroundsData } from "@/data/backgroundsData";
import { charsData } from "@/data/charsData";
import { elemsData } from "@/data/elemsData";

type Props = {
    title: string | undefined;
    onHandleFilter: (s: string, d: any) => void;
    onRemoveFilters: (d: any) => void;
}

export default function FilterButtons ({ title, onHandleFilter, onRemoveFilters }: Props) {
    const [data, setData] = useState(backgroundsData);
    let repeatedCategories = [];

    useEffect(() => {
        if (title === "Backgrounds") {
            setData(backgroundsData);
        } else if (title === "Characters") {
            setData(charsData);
        } else {
            setData(elemsData);
    }}, [title]);
    
    for (let elemIndex in data) {
         for (let categIndex in data[elemIndex].category) {
         repeatedCategories.push(data[elemIndex].category[categIndex]);
    }}

    const setOfCategories = new Set(repeatedCategories);
    const categories = [...setOfCategories];

    return (
        <View style={styles.mainContainer}>
            <View style={styles.buttonsContainer}>
                {categories.map((categ) => 
                <Pressable 
                    onPress={() => {
                        onHandleFilter(categ, data);
                    }}
                    key={categ}
                    style={({pressed}) => [{ opacity: pressed ? 0.4 : 1 }, styles.buttonFilter]}
                >
                    <Text style={styles.buttonText} key={categ}>{categ}</Text>
                </Pressable>)} 
            </View>

            <Pressable
                onPress={() => onRemoveFilters(data)}
                style={{ marginTop: 10 }}
            >
                <Text style={styles.buttonText}>🗑️ Remove filters</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 20,
        marginTop: 15,
    },

    buttonsContainer: {
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 7.5,
    },

    buttonFilter: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: colors.onPressOpacity,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.primary,
    },

    buttonText: {
        color: colors.primary,
        fontFamily: "Fredoka-Regular",
    },
});