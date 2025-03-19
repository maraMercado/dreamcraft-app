import Ionicons from "@expo/vector-icons/Ionicons";

type ArrowIconProps = {
    color: string;
} 

type TabBarIconProps = {
    name: any;
    color: string;
}

export function ArrowIcon({ color }: ArrowIconProps) {
    return (
        <Ionicons
            name="arrow-back"
            size={30} 
            style={{ marginLeft: 15, marginRight: 5 }} 
            color={color}
        />
    )
}

export function TabBarIcon({ name, color }: TabBarIconProps) {
    return (
        <Ionicons
            name={name}
            color={color}
            size={24}
        />
    )
}