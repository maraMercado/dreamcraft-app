import { View, StyleSheet, } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { type ImageSource } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

import { useEffect, useState } from "react";
import { useImageRef } from "@/context/ImageRefContext";
import { useImageContext } from "@/context/ImageContext";

import ImageViewer from "@/components/ImageViewer";
import CircleButton from "@/components/buttons/CircleButton";
import IconButton from "@/components/buttons/IconButton";
import CustomizeModal from "@/components/customize/CustomizeModal";
import CustomizeList from "@/components/customize/CustomizeList";
import FullModal from "@/components/full-modal/FullModal";
import FullModalList from "@/components/full-modal/FullModalList";
import FilterButtons from "@/components/buttons/FilterButtons";
import CharSticker from "@/components/CharSticker";

import { backgroundsData } from "@/data/backgroundsData";
import { charsData } from "@/data/charsData";
import { elemsData } from "@/data/elemsData";
import { colors } from "@/styles/colors";

const randomImage = Math.floor(Math.random() * backgroundsData.length);
const PlaceholderImage = backgroundsData[randomImage].image;

export default function CreateScreen() {
    const { selectedImage, setSelectedImage, selectedChars, setSelectedChars } = useImageContext();

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [fullModalTitle, setFullModalTitle] = useState<string | undefined>(undefined);
    const [isFullModalVisible, setIsFullModalVisible] = useState<boolean>(false);

    const [data, setData] = useState(backgroundsData);
    const [areFiltersVisible, setAreFiltersVisible] = useState<boolean>(false);

    const imageRef = useImageRef();

    useEffect(() => {
      if (fullModalTitle === "Backgrounds") {
        setData(backgroundsData);
      }

      if (fullModalTitle === "Characters") {
        setData(charsData)
      }

      if (fullModalTitle === "Elements") {
        setData(elemsData);
      }
    }, [fullModalTitle])

    const onCustomize = () => {
      setIsModalVisible(true);
    };

    const onModalClose = () => {
      setIsModalVisible(false);
    };

    const onFullModalClose = () => {
      setIsFullModalVisible(false);
    };

    const onRestart = () => {
      const restartedChars = [undefined];
      setSelectedImage(PlaceholderImage);
      setSelectedChars(restartedChars);
    };

    const handleOptionSelect = (text: string) => {
        setFullModalTitle(text);
        setIsFullModalVisible(true);
    };

    const handleItemSelect = (image: ImageSource) => {
      if (fullModalTitle === "Backgrounds") {
        setSelectedImage(image);
      }

      else {
        const updatedChars = [...selectedChars, image];
        setSelectedChars(updatedChars);
      } 
    }

    const handleItemDelete = (i: number) => {
      const removedChars = selectedChars.map((src, index) => {
        if (index === i) {
          return undefined;
        }
        return src;
      });

      setSelectedChars(removedChars);
    };

    const handleFilter = (categ: string, data: any) => {
      const filteredList = data.filter((obj: any) => 
        obj.category.some((cat: string) => cat === categ))
        setData(filteredList);
    }

    const onFiltersHandler = () => {
      setAreFiltersVisible((prev: boolean) => !prev);
    }

    const removeFiltersHandler= (data: any) => {
      setData(data);
    }

    return (
        <GestureHandlerRootView style={styles.mainContainer}>

            <LinearGradient
              colors={[colors.gradientLight, "transparent"]}
              style={styles.background}
              start={{x: 0, y: 0.1}}
            />

            <View style={styles.imgContainer} ref={imageRef} collapsable={false}>
                <ImageViewer imgSource={selectedImage || PlaceholderImage} />
                {selectedChars.map((sticker, index) => (
                    <CharSticker onDelete={() => handleItemDelete(index)} key={index} imageSize={85} stickerSource={sticker} />
                ))}
            </View>

            <View style={styles.toolsContainer}>
              <IconButton onPress={onRestart} icon="rotate-left" label="restart"/>
              <CircleButton onPress={onCustomize} />
              <IconButton navigates={true} icon="check" label="done" />
              
              <CustomizeModal 
                isVisible={isModalVisible}
                onClose={onModalClose}>
                  <CustomizeList onSelect={handleOptionSelect} onCloseModal={onModalClose} />
              </CustomizeModal>
            </View>
          

            <FullModal 
              isVisible={isFullModalVisible} 
              onClose={onFullModalClose}
              title={fullModalTitle}
              onFiltersVisible={onFiltersHandler}
            > 
                {areFiltersVisible && 
                <FilterButtons title={fullModalTitle} onHandleFilter={handleFilter} onRemoveFilters={removeFiltersHandler} />
                }

                <FullModalList 
                  data={data} 
                  onSelect={handleItemSelect} 
                  onCloseModal={onFullModalClose} 
                />

            </FullModal>

        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gradientDark,
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  imgContainer: {
    flex: 4/5,
    marginTop: 15,
  },

  toolsContainer: {
    flex: 1/5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
})