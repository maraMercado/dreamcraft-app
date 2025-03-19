import { createContext, useContext, useRef, RefObject } from "react";
import { View } from "react-native";

type ImageRefContextType = RefObject<View> | null;

const ImageRefContext = createContext<ImageRefContextType>(null);

export function ImageRefProvider({ children }: {children: React.ReactNode }) {
    const imageRef = useRef<View>(null);

    return (
        <ImageRefContext.Provider value={imageRef}>
            {children}
        </ImageRefContext.Provider>
    );
}

export function useImageRef() {
    const context = useContext(ImageRefContext);

    if (!context) {
        throw new Error("useImageRef debe usarse dentro de un ImageRefProvider.");
    }
    
    return context;
}