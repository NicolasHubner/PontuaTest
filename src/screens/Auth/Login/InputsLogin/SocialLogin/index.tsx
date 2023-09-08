import { INavigation } from '@/helpers/interfaces/INavigation';
import { RequestApiFake } from '@/helpers/interfaces/RequestApi';
import { UseFakeLogin } from '@/helpers/functions/LoginFunction';
import { Routes } from '@/routes/routes';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, useTheme, Image, Pressable, Toast } from 'native-base';
import { useDispatch } from 'react-redux';
import { SET_USER_INFO } from '@/store/reducers/profileSlice';
import { useState } from 'react';
import { AppleAuthenticator } from '@/helpers/Auth/Apple';
import { Platform } from 'react-native';

export const SocialLogin = ({
    setLoading,
    loading,
}: {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
}) => {
    const { colors } = useTheme();

    const dispatch = useDispatch();

    const navigator = useNavigation<INavigation>();

    const handleLogin = async (type: string) => {
        setLoading(true);
        try {
            const response = (await UseFakeLogin({
                email: type,
                password: type,
            })) as RequestApiFake;

            setTimeout(() => {
                dispatch(SET_USER_INFO({ isLogged: true, token: response.token }));
                dispatch(SET_USER_INFO({ name: 'Teste', email: 'loginsocial@social.com' }));
                navigator.navigate(Routes.Main.HOME, { screen: Routes.Main.HOME });
            }, 1000);
        } catch (error) {
            console.error(error);
            Toast.show({
                description: 'Erro ao logar, usuário ou senha inválidos.',
                placement: 'top',
            });
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    };

    const handleAppleLogin = async () => {
        if (Platform.OS === 'android') {
            Toast.show({
                description: 'Login com Apple não disponível para Android.',
                placement: 'top',
            });
            return;
        }
        setLoading(true);
        try {
            const credential = await AppleAuthenticator();
            const response = (await UseFakeLogin({
                email: credential.email || '',
                password: credential.user,
            })) as RequestApiFake;

            dispatch(SET_USER_INFO({ isLogged: true, token: response.token }));
            dispatch(
                SET_USER_INFO({
                    name:
                        `${credential.fullName?.givenName} ${credential.fullName?.middleName}` ||
                        '',
                    email: credential.email || '',
                })
            );
            navigator.navigate(Routes.Main.HOME, { screen: Routes.Main.HOME });
        } catch (error) {
            console.error(error);
            Toast.show({
                description: 'Erro ao logar, usuário ou senha inválidos.',
                placement: 'top',
            });
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
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
                <Pressable disabled={loading} onPress={() => handleLogin('Google')}>
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

                <Pressable disabled={loading} onPress={() => handleAppleLogin()}>
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

                <Pressable disabled={loading} onPress={() => handleLogin('Facebook')}>
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
