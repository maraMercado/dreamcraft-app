import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops! Not found..."}} />
            <Link href="/">Go back home</Link>
        </>
    )
}