import { View } from 'native-base';
import { useEffect, useState } from 'react';
import { Animated, ViewStyle } from 'react-native';

interface SkeletonProps {
    width?: ViewStyle['width'];
    height?: ViewStyle['height'];
    borderRadius?: ViewStyle['borderRadius'];
    minOpacity?: number;
    maxOpacity?: number;
    marginTop?: ViewStyle['marginTop'];
}

export function Skeleton({
    width = '100%',
    height = 'auto',
    borderRadius = 0,
    minOpacity = 0.2,
    maxOpacity = 0.6,
    marginTop = 0,
}: SkeletonProps) {
    const [animatedOpacityValue, _] = useState(new Animated.Value(minOpacity));

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedOpacityValue, {
                    toValue: maxOpacity,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedOpacityValue, {
                    toValue: minOpacity,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [animatedOpacityValue, minOpacity, maxOpacity]);

    return (
        <View
            bgColor={'gray.500'}
            minH={1}
            minWidth={1}
            style={{ opacity: animatedOpacityValue, width, height, borderRadius, marginTop }}
        />
    );
}
