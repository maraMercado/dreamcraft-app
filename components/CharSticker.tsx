import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { type ImageSource } from "expo-image";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Pressable } from "react-native";

type Props = {
    imageSize: number;
    stickerSource: ImageSource | undefined;
    onDelete: any;
};

export default function CharSticker({ imageSize, stickerSource, onDelete }: Props) {
    const scaleImage = useSharedValue(imageSize);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const drag = Gesture.Pan().onChange(event => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    })

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
            ],
        };
    });

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2) {
                scaleImage.value = scaleImage.value * 2;
            } else {
                scaleImage.value = Math.round(scaleImage.value / 2);
            }
    });

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });

    return (
        <GestureDetector gesture={drag}>
            <Animated.View style={[containerStyle, { position: "absolute", left: 50, top: 50 }]}>
                <GestureDetector gesture={doubleTap}>
                    <Pressable onLongPress={onDelete}>
                        <Animated.Image
                            source={stickerSource}
                            resizeMode="contain"
                            style={[imageStyle, { width: imageSize, height: imageSize }]}
                        />
                    </Pressable>
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    );
}

