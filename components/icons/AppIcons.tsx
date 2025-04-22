import { Pressable, Text } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { colors } from "@/styles/colors";

type ToolsIconsProps = {
    name: string;
}

type IconProps = {
    onPress: () => void;
    style: any;
}

export function BrushIcon() {
    return (
        <FontAwesome6
            name="palette"
            size={38}
            color={colors.primary}
        />
    )
}

export function ToolsIcons({ name }: ToolsIconsProps) {
    return (
        <FontAwesome6 
            name={name}
            size={34}
            color={colors.primary}
        />
    )
}

export function CloseIcon({ onPress, style }: IconProps) {
    return (
        <Pressable 
            style={({pressed}) => [{ opacity: pressed ? 0.4 : 1, right: 5 }]}
            onPress={onPress}
        >
            <Text style={[style, { fontSize: 30, }]}>X</Text>
        </Pressable>
    )
}

export function FilterIcon({ onPress, style }: IconProps) {
    return (
        <Pressable
            style={({pressed}) => [{ opacity: pressed ? 0.4 : 1 }, style]}
            onPress={onPress}
        >
            <FontAwesome6 name="filter" size={25} color={colors.primary} />
        </Pressable>
    )
}

export function EmailIcon() {
    return (
        <FontAwesome6 
            name="at"
            size={18}
            color={colors.yellow}
        />
    )
}

export function LockIcon() {
    return (
        <FontAwesome6 
            name="lock"
            size={18}
            color={colors.yellow}
        />
    )
}

export function SaveIcon() {
    return (
        <FontAwesome6
            name="save"
            size={30}
            color={colors.primary}
        />
    )
}