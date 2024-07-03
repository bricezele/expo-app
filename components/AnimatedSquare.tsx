/**
 * @Project test-app
 * @File AnimatedSquare.tsx
 * @Path components
 * @Author BRICE ZELE
 * @Date 03/07/2024
 */
import React, {useCallback} from "react";
import {StyleSheet} from "react-native";
import Animated, {useAnimatedStyle, useSharedValue, withSpring, withTiming} from "react-native-reanimated";
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import {interpolateColor} from "react-native-reanimated/src";

const AnimatedSquare: React.FC = () => {

    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)
    const rotation = useSharedValue(0)
    const backgroundColor = useSharedValue(0)
    const scale = useSharedValue(1)
    const translate = useSharedValue({x: 0, y: 0})

    const panGesture = Gesture.Pan()
        .onStart(() => {
            rotation.value = withTiming(rotation.value + 45, {duration: 300})
            scale.value = withTiming(scale.value  === 1 ? 1.5 : 1, {duration: 300})
            backgroundColor.value = withTiming(backgroundColor.value === 0 ? 1 : 0, {duration: 300})
            translate.value = {x: translateX.value, y: translateY.value}
        })
        .onUpdate((event) => {
            translateX.value = event.translationX + translate.value.x
            translateY.value = event.translationY + translate.value.y
        })
        .onEnd(() => {
            translateX.value = withSpring(translateX.value)
            translateY.value = withSpring(translateY.value)
            rotation.value = withTiming(0, {duration: 300})
            scale.value = withTiming(1, {duration: 300})
            backgroundColor.value = withTiming(backgroundColor.value === 0 ? 1 : 0, {duration: 300})
        })


    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: translateX.value},
                {translateY: translateY.value},
                {rotate: `${rotation.value}deg`},
                {scale: scale.value},
            ],
            backgroundColor: interpolateColor(
                backgroundColor.value,
                [0, 1],
                ['blue', 'orange']
            )
        }
    })

    return (
        <GestureDetector gesture={panGesture}>
            <Animated.View style={[animatedStyle, styles.square]} />
        </GestureDetector>
    )

}

export default AnimatedSquare

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        borderRadius: 20
    }
})
