import { Image } from "react-native";

type charsCategoriesProps = Array<"Kingdom" | "Girls" | "Boys" | "Animals" | "Jobs" | "Fantastic creatures" | "Outer space" | "Sports" | "Heroes" | "Underwater">;

type charsDataProps = {
    image: Image;
    text: string;
    category: charsCategoriesProps;
    id: string;
}[];

export const charsData: charsDataProps = [
    {
        image: require("@/assets/images/chars/princess-sparkly.png"),
        text: "Sparkly princess",
        category: ["Kingdom", "Girls"],
        id: "100",
    },
    {
        image: require("@/assets/images/chars/warrior.png"),
        text: "Warrior",
        category: ["Kingdom", "Boys"],
        id: "101",
    },
    {
        image: require("@/assets/images/chars/capibara.png"),
        text: "Capybara",
        category: ["Animals"],
        id: "102",
    },
    {
        image: require("@/assets/images/chars/construction.png"),
        text: "Construction guy",
        category: ["Jobs", "Boys"],
        id: "103",
    },
    {
        image: require("@/assets/images/chars/cow.png"),
        text: "Cow",
        category: ["Animals"],
        id: "104",
    },
    {
        image: require("@/assets/images/chars/dog.png"),
        text: "Dog",
        category: ["Animals"],
        id: "105",
    },
    {
        image: require("@/assets/images/chars/dragon.png"),
        text: "Green dragon",
        category: ["Fantastic creatures", "Animals"],
        id: "106",
    },
    {
        image: require("@/assets/images/chars/football.png"),
        text: "Soccer player",
        category: ["Sports", "Boys"],
        id: "107",
    },
    {
        image: require("@/assets/images/chars/giraffe.png"),
        text: "Giraffe",
        category: ["Animals"],
        id: "108",
    },
    {
        image: require("@/assets/images/chars/police.png"),
        text: "Police man",
        category: ["Jobs", "Boys"],
        id: "109",
    },
    {
        image: require("@/assets/images/chars/warrior-girl.png"),
        text: "Warrior girl",
        category: ["Girls"],
        id: "110",
    },
    {
        image: require("@/assets/images/chars/alien.png"),
        text: "Cute alien",
        category: ["Outer space", "Fantastic creatures"],
        id: "111",
    },
    {
        image: require("@/assets/images/chars/astronaut.png"),
        text: "Astronaut",
        category: ["Outer space", "Jobs"],
        id: "112",
    },
    {
        image: require("@/assets/images/chars/superheroe.png"),
        text: "Superheroe",
        category: ["Heroes", "Boys"],
        id: "113",
    },
    {
        image: require("@/assets/images/chars/mermaid.png"),
        text: "Mermaid",
        category: ["Fantastic creatures", "Underwater", "Girls"],
        id: "114",
    },
    {
        image: require("@/assets/images/chars/alien-big.png"),
        text: "Alien",
        category: ["Outer space", "Fantastic creatures"],
        id: "115",
    },
    {
        image: require("@/assets/images/chars/ballerina.png"),
        text: "Ballerina",
        category: ["Girls", "Sports"],
        id: "116",
    },
    {
        image: require("@/assets/images/chars/boy.png"),
        text: "Boy",
        category: ["Boys"],
        id: "117",
    },
    {
        image: require("@/assets/images/chars/bunny.png"),
        text: "Bunny",
        category: ["Animals"],
        id: "118",
    },
    {
        image: require("@/assets/images/chars/happy-monster.png"),
        text: "Monster",
        category: ["Fantastic creatures"],
        id: "119",
    },
    {
        image: require("@/assets/images/chars/cat-black.png"),
        text: "Black cat",
        category: ["Animals"],
        id: "120",
    },
    {
        image: require("@/assets/images/chars/cat-orange.png"),
        text: "Orange cat",
        category: ["Animals"],
        id: "121",
    },
    {
        image: require("@/assets/images/chars/cat-white.png"),
        text: "White cat",
        category: ["Animals"],
        id: "122",
    },
    {
        image: require("@/assets/images/chars/dinosaur.png"),
        text: "Dinosaur",
        category: ["Animals"],
        id: "123",
    },
    {
        image: require("@/assets/images/chars/blue-dragon.png"),
        text: "Blue dragon",
        category: ["Animals", "Fantastic creatures"],
        id: "124",
    },
    {
        image: require("@/assets/images/chars/fairy.png"),
        text: "Fairy",
        category: ["Girls", "Fantastic creatures"],
        id: "125",
    },
    {
        image: require("@/assets/images/chars/firefighter.png"),
        text: "Firefighter",
        category: ["Boys", "Jobs"],
        id: "126",
    },
    {
        image: require("@/assets/images/chars/ghost.png"),
        text: "Ghost",
        category: ["Fantastic creatures"],
        id: "127",
    },
    {
        image: require("@/assets/images/chars/giraffe-big-ears.png"),
        text: "Cute giraffe",
        category: ["Animals"],
        id: "128",
    },
    {
        image: require("@/assets/images/chars/girl.png"),
        text: "Girl",
        category: ["Girls"],
        id: "129",
    },
    {
        image: require("@/assets/images/chars/greek-girl.png"),
        text: "Greek girl",
        category: ["Girls"],
        id: "130",
    },
    {
        image: require("@/assets/images/chars/princess-blue.png"),
        text: "Blue dress princess",
        category: ["Girls", "Kingdom"],
        id: "131",
    },
    {
        image: require("@/assets/images/chars/robot.png"),
        text: "Robot",
        category: ["Fantastic creatures"],
        id: "132",
    },
    {
        image: require("@/assets/images/chars/seahorse.png"),
        text: "Seahorse",
        category: ["Animals", "Underwater"],
        id: "133",
    },
    {
        image: require("@/assets/images/chars/shark.png"),
        text: "Shark",
        category: ["Animals", "Underwater"],
        id: "134",
    },
    {
        image: require("@/assets/images/chars/snowman.png"),
        text: "Snowman",
        category: ["Fantastic creatures"],
        id: "135",
    },
    {
        image: require("@/assets/images/chars/t-rex.png"),
        text: "T-Rex",
        category: ["Animals"],
        id: "136",
    },
    {
        image: require("@/assets/images/chars/turtle.png"),
        text: "Turtle",
        category: ["Animals", "Underwater"],
        id: "137",
    },
    {
        image: require("@/assets/images/chars/unicorn.png"),
        text: "Unicorn",
        category: ["Fantastic creatures"],
        id: "138",
    },
    {
        image: require("@/assets/images/chars/viking.png"),
        text: "Viking",
        category: ["Boys"],
        id: "139",
    },
    {
        image: require("@/assets/images/chars/witch-broom.png"),
        text: "Witch with a broom",
        category: ["Fantastic creatures", "Girls"],
        id: "140",
    },
    {
        image: require("@/assets/images/chars/horse-black.png"),
        text: "Black horse",
        category: ["Animals"],
        id: "141",
    },
    {
        image: require("@/assets/images/chars/horse-cute.png"),
        text: "Horse",
        category: ["Animals"],
        id: "142",
    },
    {
        image: require("@/assets/images/chars/knight-tall.png"),
        text: "Knight",
        category: ["Boys", "Kingdom"],
        id: "143",
    },
    {
        image: require("@/assets/images/chars/leopard.png"),
        text: "Leopard",
        category: ["Animals"],
        id: "144",
    },
]