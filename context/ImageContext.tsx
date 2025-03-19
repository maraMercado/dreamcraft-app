import { createContext, ReactNode, useContext, useState } from "react";
import { type ImageSource } from "expo-image";

type ImageContextType = {
    selectedImage: ImageSource | undefined;
    setSelectedImage: (image: ImageSource) => void;
    selectedChars: (ImageSource | undefined)[];
    setSelectedChars: (chars: (ImageSource | undefined)[]) => void;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const useImageContext = () => {
    const context = useContext(ImageContext);
    if (!context) {
        throw new Error("useImageContext must be used within an ImageProvider");
    }
    return context;
}

type ImageProviderProps = {
    children: ReactNode;
}

export const ImageProvider = ({ children }: ImageProviderProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageSource | undefined>(undefined);
  const [selectedChars, setSelectedChars] = useState<(ImageSource | undefined)[]>([]);

  return (
    <ImageContext.Provider value={{ selectedImage, setSelectedImage, selectedChars, setSelectedChars }}>
      {children}
    </ImageContext.Provider>
  );
}