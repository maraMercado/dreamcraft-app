import Constants from "expo-constants";

const API_URL = "https://dreamcraft-app.expo.app";

export const generateAPIUrl = (relativePath: string) => {
    console.log("Constants", Constants.experienceUrl);

    const origin = Constants?.experienceUrl?.replace("exp://", "http://") || API_URL;

    const path = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;

    if (process.env.NODE_ENV === "development") {
        return origin?.concat(path);
    }

    if (!API_URL) {
        throw new Error("API_URL environment variable is not defined. Check out api-url.ts");
    }

    return API_URL.concat(path);
};