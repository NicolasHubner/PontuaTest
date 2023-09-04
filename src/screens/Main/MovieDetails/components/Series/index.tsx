import ArrowDown from '@/assets/Svg/ArrowDownBooks.svg';
import { truncateText } from '@/helpers/text/truncateText';
import { View, Text, useTheme, Pressable } from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

interface ISeries {
    dataSeries?: {
        resoureURI: string;
        name: string;
    }[];
    startYear?: string;
    endYear?: string;
}

export default function Series({ dataSeries, startYear, endYear }: ISeries) {
    const { colors } = useTheme();

    const maxHeight = useRef(new Animated.Value(0)).current;

    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (!dataSeries) return;
        Animated.timing(maxHeight, {
            toValue: isExpanded ? dataSeries?.length * 65 : 120,
            duration: 750,
            useNativeDriver: false,
            delay: 1,
            easing: Easing.inOut(Easing.ease),
        }).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isExpanded]);

    return (
        <View mt={'32px'} flexDir={'column'} w={'100%'} px={'24px'}>
            <View flexDir={'row'}>
                {startYear && endYear && (
                    <Text
                        mr={'34px'}
                        lineHeight={'14px'}
                        fontSize={'14px'}
                        fontWeight={500}
                        color={'#BCC1CD'}>
                        Data
                    </Text>
                )}
                <Text
                    flexGrow={1}
                    color={'#BCC1CD'}
                    lineHeight={'14px'}
                    fontSize={'14px'}
                    fontWeight={500}>
                    TimeLine
                </Text>
                <ArrowDown />
            </View>

            <View mt={'24px'} flexDir={'row'} justifyContent={'flex-start'}>
                {startYear && endYear && (
                    <View
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        borderRightColor={'white'}
                        w={'52px'}
                        borderRightWidth={1}>
                        <Text
                            fontSize={'14px'}
                            fontWeight={500}
                            lineHeight={'14px'}
                            color={colors.white}>
                            {new Date(startYear!).getFullYear()}
                        </Text>
                        <Text
                            fontSize={'14px'}
                            fontWeight={500}
                            lineHeight={'14px'}
                            color={colors.white}>
                            {new Date(endYear!).getFullYear()}
                        </Text>
                    </View>
                )}

                <Animated.View style={{ maxHeight, overflow: 'hidden' }}>
                    <View ml={'16px'} alignItems={startYear && endYear ? 'flex-start' : 'center'}>
                        {dataSeries &&
                            dataSeries.map((item, index) => (
                                <View
                                    key={index}
                                    w={startYear && endYear ? '300px' : '310px'}
                                    h={'45px'}
                                    marginY={'8px'}
                                    flexGrow={1}
                                    borderRadius={'16px'}
                                    backgroundColor={'#313140'}
                                    justifyContent={'center'}
                                    alignItems={'center'}>
                                    <Text
                                        fontSize={'14px'}
                                        fontWeight={500}
                                        lineHeight={'14px'}
                                        color={colors.white}>
                                        {truncateText(item.name, 5)}
                                    </Text>
                                </View>
                            ))}
                    </View>
                </Animated.View>
                {/* )} */}
            </View>

            {dataSeries && dataSeries.length > 2 && (
                <Pressable
                    onPress={() => setIsExpanded(prev => !prev)}
                    w={'100%'}
                    h={'45px'}
                    mt={'8px'}
                    // backgroundColor={'white'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Text
                        fontSize={'14px'}
                        fontWeight={500}
                        lineHeight={'14px'}
                        color={colors.white}>
                        {isExpanded ? 'Ver menos' : 'Ver mais'}
                    </Text>
                </Pressable>
            )}
        </View>
    );
}
