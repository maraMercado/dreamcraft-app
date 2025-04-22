import { Image } from "react-native";

type elemsCategoriesProps = Array<"Party" | "Vehicles" | "Magic" | "Outer space" | "Battle" | "Toys" | "Nature" | "Sports" | "Food" | "Hobbies">;

type elemsDataProps = {
    image: Image;
    text: string;
    category: elemsCategoriesProps;
    id: string;
}[];

export const elemsData: elemsDataProps = [
    {
        image: require("@/assets/images/elems/birthday-cake.png"),
        text: "B-day cake",
        category: ["Party"],
        id: "200",
    },
    {
        image: require("@/assets/images/elems/car.png"),
        text: "Car",
        category: ["Vehicles"],
        id: "201",
    },
    {
        image: require("@/assets/images/elems/gift.png"),
        text: "Gift",
        category: ["Party"],
        id: "202",
    },
    {
        image: require("@/assets/images/elems/magic.png"),
        text: "Magic",
        category: ["Magic"],
        id: "203",
    },
    {
        image: require("@/assets/images/elems/mystery-box.png"),
        text: "Mystery box",
        category: ["Magic"],
        id: "204",
    },
    {
        image: require("@/assets/images/elems/ovni.png"),
        text: "Ovni",
        category: ["Outer space"],
        id: "205",
    },
    {
        image: require("@/assets/images/elems/party.png"),
        text: "Party",
        category: ["Party"],
        id: "206",
    },
    {
        image: require("@/assets/images/elems/rocket.png"),
        text: "Rocket",
        category: ["Outer space", "Vehicles"],
        id: "207",
    },
    {
        image: require("@/assets/images/elems/shield.png"),
        text: "Shield",
        category: ["Battle"],
        id: "208",
    },
    {
        image: require("@/assets/images/elems/teddy.png"),
        text: "Teddy",
        category: ["Toys"],
        id: "209",
    },
    {
        image: require("@/assets/images/elems/treasure.png"),
        text: "Treasure",
        category: ["Magic"],
        id: "210",
    },
    {
        image: require("@/assets/images/elems/volcano.png"),
        text: "Volcano",
        category: ["Nature"],
        id: "211",
    },
    {
        image: require("@/assets/images/elems/basketball.png"),
        text: "Basketball",
        category: ["Sports"],
        id: "212",
    },
    {
        image: require("@/assets/images/elems/boat.png"),
        text: "Boat",
        category: ["Vehicles"],
        id: "213",
    },
    {
        image: require("@/assets/images/elems/book.png"),
        text: "Book",
        category: ["Hobbies"],
        id: "214",
    },
    {
        image: require("@/assets/images/elems/car-green.png"),
        text: "Green car",
        category: ["Vehicles"],
        id: "215",
    },
    {
        image: require("@/assets/images/elems/cassette.png"),
        text: "Cassette",
        category: ["Hobbies"],
        id: "216",
    },
    {
        image: require("@/assets/images/elems/drink-milkshake-chocolate.png"),
        text: "Chocolate milkshake",
        category: ["Food"],
        id: "217",
    },
    {
        image: require("@/assets/images/elems/fire-truck.png"),
        text: "Fire truck",
        category: ["Vehicles"],
        id: "218",
    },
    {
        image: require("@/assets/images/elems/football.png"),
        text: "Football",
        category: ["Sports"],
        id: "219",
    },
    {
        image: require("@/assets/images/elems/lambo.png"),
        text: "Sports car",
        category: ["Vehicles"],
        id: "220",
    },
    {
        image: require("@/assets/images/elems/magic-wand.png"),
        text: "Magic wand",
        category: ["Magic"],
        id: "221",
    },
    {
        image: require("@/assets/images/elems/pumpkin.png"),
        text: "Pumpkin",
        category: ["Magic", "Food"],
        id: "222",
    },
    {
        image: require("@/assets/images/elems/soccer.png"),
        text: "Soccer ball",
        category: ["Sports"],
        id: "223",
    },
    {
        image: require("@/assets/images/elems/sword.png"),
        text: "Sword",
        category: ["Toys"],
        id: "224",
    },
]