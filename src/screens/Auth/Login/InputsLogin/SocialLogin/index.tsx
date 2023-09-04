import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, useTheme, Image, Pressable } from 'native-base';

export const SocialLogin = () => {
    const { colors } = useTheme();

    const onSignInGoogle = async () => {
        try {
            console.log('google');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <View w={'100%'} alignItems={'center'} flexDir={'row'} justifyContent={'center'} mt={4}>
                <LinearGradient
                    colors={['#d9d9d914', '#d9d9d987']}
                    style={{
                        width: 98,
                        height: 1,
                        marginRight: 8,
                    }}
                    start={[0, 0]}
                    end={[1.3, 0]}
                />
                <Text
                    color={colors.primary[700]}
                    textAlign={'center'}
                    fontSize={11.25}
                    lineHeight={16.88}
                    fontWeight={500}>
                    Faça login com
                </Text>
                <LinearGradient
                    colors={['#d9d9d987', '#d9d9d914']}
                    style={{
                        width: 98,
                        height: 1,
                        marginLeft: 8,
                    }}
                    start={[0, 0]}
                    end={[1.3, 0]}
                />
            </View>

            <View
                mt={4}
                width={314}
                flexDir={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                style={{ gap: 24 }}>
                <Pressable onPress={onSignInGoogle}>
                    <LinearGradient
                        colors={['#ffffff38', '#21212134']}
                        start={[0, 0]}
                        end={[1, 0]}
                        style={{
                            width: 58.1,
                            height: 44,
                            borderRadius: 9,
                            borderWidth: 0.3,
                            borderColor: colors.primary[600],
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Image
                            alt="Google"
                            source={require('@/assets/images/Google.png')}
                            width={5}
                            height={5}
                            resizeMode="contain"
                        />
                    </LinearGradient>
                </Pressable>

                <Pressable onPress={() => {}}>
                    <LinearGradient
                        colors={['#ffffff38', '#21212134']}
                        start={[0, 0]}
                        end={[1, 0]}
                        style={{
                            width: 58.1,
                            height: 44,
                            borderRadius: 8,
                            borderWidth: 0.3,
                            borderColor: colors.primary[600],
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Image alt="Apple" source={require('@/assets/images/Apple.png')} mt={1.5} />
                    </LinearGradient>
                </Pressable>

                <Pressable onPress={() => {}}>
                    <LinearGradient
                        colors={['#ffffff38', '#21212134']}
                        start={[0, 0]}
                        end={[1, 0]}
                        style={{
                            width: 58.1,
                            height: 44,
                            borderRadius: 8,
                            borderWidth: 0.3,
                            borderColor: colors.primary[600],
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Image
                            alt="Facebook"
                            source={require('@/assets/images/Facebook.png')}
                            mt={1.5}
                            resizeMethod="resize"
                        />
                    </LinearGradient>
                </Pressable>
            </View>
        </>
    );
};
