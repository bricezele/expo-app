/**
 * @Project test-app
 * @File square.tsx
 * @Path app/(tabs)
 * @Author BRICE ZELE
 * @Date 03/07/2024
 */
import {StyleSheet} from 'react-native';

import {View} from '@/components/Themed';
import AnimatedSquare from "@/components/AnimatedSquare";

export default function SquareScreen() {
    return (
        <View style={styles.container}>
            <AnimatedSquare />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
