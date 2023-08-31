import { Box, Input, useTheme, Text, Button, Spinner, Toast, Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { INavigation } from '@/helpers/interfaces/INavigation';
import { TouchableOpacity } from 'react-native';
import { Routes } from '@/routes/routes';
import { Title } from './Title';
import { LinearGradient } from 'expo-linear-gradient';
import { SocialLogin } from './SocialLogin';

interface InputsSingInProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormData = {
    email: string;
    password: string;
};

// Utilizei React Hook Form para validação dos campos e envio dos dados
// Evitando reenderizações desnecessárias para aumentar perfomance do usuario

const STORAGE_USER_KEY = '@GenteCultura/user';

export default function InputsSingIn({ show, setShow }: InputsSingInProps) {
    const [loading, setLoading] = useState(false);

    const navigator = useNavigation<INavigation>();

    const { colors } = useTheme();

    const { control, handleSubmit } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    // console.log(JSON.stringify(FIREBASE_APP, null, 2));

    const color = useTheme().colors;

    const onSubmit = async (data: FormData) => {
        try {
            setLoading(true);

            // const res = await UseLogin({
            //     email: data.email,
            //     password: data.password,
            // });

            // if (res) {
            //     const { token } = res;

            //     // Simulando um token JWT
            //     AsyncStorage.setItem(STORAGE_USER_KEY, JSON.stringify(token));

            //     navigator.navigate(Routes.Auth.HOME);
            // }
        } catch (error) {
            console.log(error);
            Toast.show({
                description: 'Erro ao logar, usuário ou senha inválidos.',
                placement: 'top',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box alignItems={'center'} w={'100%'}>
            <Title />

            <Box
                w={{
                    base: '314px',
                    md: '25%',
                }}
                mt={8}>
                <Text
                    color={colors.primary[600]}
                    fontSize={14.33}
                    fontWeight={'500'}
                    lineHeight={21.49}
                    mb={2}
                    letterSpacing={1}
                    textAlign={'left'}>
                    Usuário
                </Text>
            </Box>

            <Box>
                <Box w={'314px'} h={20} backgroundColor={'transparent'} borderColor={'red'}>
                    <Controller
                        control={control}
                        rules={{
                            required: 'Email é obrigatório',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Email inválido',
                            },
                        }}
                        render={({ field, fieldState }) => (
                            <>
                                <LinearGradient
                                    colors={['#ffffff38', '#21212134']}
                                    start={[0, 0]}
                                    end={[1, 0]}
                                    style={{
                                        borderRadius: 8,
                                        borderWidth: 0.3,
                                        borderColor: colors.primary[600],
                                    }}>
                                    <Input
                                        w={{
                                            base: '100%',
                                            md: '25%',
                                        }}
                                        h={'55px'}
                                        // mb={4}
                                        borderRadius={8}
                                        borderColor={'transparent'}
                                        value={field.value}
                                        color={colors.primary[600]}
                                        fontSize={14}
                                        textDecoration={'none'}
                                        fontWeight={'500'}
                                        lineHeight={21.49}
                                        focusOutlineColor={'transparent'}
                                        onBlur={field.onBlur}
                                        onChangeText={field.onChange}
                                        keyboardType="email-address"
                                        InputLeftElement={
                                            <Ionicons
                                                name="person"
                                                size={16}
                                                color={color.gray[400]}
                                                style={{ marginLeft: 16 }}
                                            />
                                        }
                                    />
                                </LinearGradient>
                                {fieldState.error && (
                                    <Text fontSize={10} style={{ color: 'red' }}>
                                        {fieldState.error.message}
                                    </Text>
                                )}
                            </>
                        )}
                        name="email"
                    />
                </Box>

                <Box
                    w={{
                        base: '314px',
                        md: '25%',
                    }}>
                    <Text
                        color={colors.primary[600]}
                        fontSize={14.33}
                        fontWeight={'500'}
                        lineHeight={21.49}
                        mb={2}
                        letterSpacing={1}
                        textAlign={'left'}>
                        Senha
                    </Text>
                </Box>
                <Box w={'314px'} h={20} backgroundColor={'transparent'}>
                    <Controller
                        control={control}
                        rules={{
                            required: 'Senha é obrigatória',
                            minLength: {
                                value: 6,
                                message: 'Senha deve ter no mínimo 6 caracteres',
                            },
                        }}
                        render={({ field, fieldState }) => (
                            <>
                                <LinearGradient
                                    colors={['#ffffff38', '#21212134']}
                                    start={[0, 0]}
                                    end={[1, 0]}
                                    style={{
                                        borderRadius: 8,
                                        borderWidth: 0.3,
                                        borderColor: colors.primary[600],
                                    }}>
                                    <Input
                                        w={{
                                            base: '100%',
                                            md: '25%',
                                        }}
                                        h={'55px'}
                                        borderRadius={8}
                                        focusOutlineColor={'transparent'}
                                        backgroundColor={'transparent'}
                                        borderColor={colors.primary[600]}
                                        value={field.value}
                                        onChangeText={field.onChange}
                                        secureTextEntry={!show}
                                        color={colors.primary[600]}
                                        fontSize={14}
                                        textDecoration={'none'}
                                        fontWeight={'500'}
                                        lineHeight={21.49}
                                        InputLeftElement={
                                            <Ionicons
                                                name="lock-closed"
                                                size={16}
                                                color={colors.primary[600]}
                                                style={{ marginLeft: 16 }}
                                            />
                                        }
                                        InputRightElement={
                                            !show ? (
                                                <Ionicons
                                                    name="eye"
                                                    size={16}
                                                    color={colors.primary[600]}
                                                    style={{ marginRight: 16 }}
                                                    onPress={() => setShow(!show)}
                                                />
                                            ) : (
                                                <Ionicons
                                                    name="eye-off"
                                                    size={16}
                                                    color={colors.primary[600]}
                                                    style={{ marginRight: 16 }}
                                                    onPress={() => setShow(!show)}
                                                />
                                            )
                                        }
                                    />
                                </LinearGradient>
                                {fieldState.error && (
                                    <Text fontSize={10} style={{ color: 'red' }}>
                                        {fieldState.error.message}
                                    </Text>
                                )}
                            </>
                        )}
                        name="password"
                    />
                </Box>
            </Box>

            <TouchableOpacity
                onPress={() => navigator.navigate(Routes.Auth.FORGOT_PASSWORD)}
                style={{ alignItems: 'center' }}>
                <Box w={'314px'}>
                    <Text
                        color={color.primary[600]}
                        textAlign={'right'}
                        lineHeight={16.99}
                        fontWeight={'500'}
                        fontSize={11.33}>
                        Forgot Password?
                    </Text>
                </Box>
            </TouchableOpacity>
            <Box
                w={{
                    base: '314px',
                    md: '25%',
                }}
                mt={4}
                mb={4}>
                <LinearGradient
                    colors={['#ED1D2F', '#BF2EB9']}
                    start={[0, 0]}
                    end={[1, 0]}
                    style={{ borderRadius: 15 }}>
                    <Button
                        disabled={loading}
                        h={12}
                        backgroundColor={'transparent'}
                        w={'100%'}
                        borderRadius={15}
                        // mt={4}
                        onPress={handleSubmit(onSubmit)}>
                        {!loading && (
                            <Text
                                textAlign={'center'}
                                color={'#FFFFFF'}
                                fontWeight={'500'}
                                fontSize={17.92}
                                lineHeight={26.88}
                                letterSpacing={1.25}>
                                entrar
                            </Text>
                        )}
                        {loading && (
                            <Spinner accessibilityLabel="Loading Login" size="sm" color="white" />
                        )}
                    </Button>
                </LinearGradient>
            </Box>

            <SocialLogin />

            <Pressable onPress={() => navigator.navigate(Routes.Auth.REGISTER)}>
                <Text
                    color={color.primary[600]}
                    fontSize={11.33}
                    fontWeight={'500'}
                    lineHeight={16.99}
                    mt={8}>
                    Não possui uma conta?<Text color={'#BF2EB9'}> Cadastre-se</Text>
                </Text>
            </Pressable>
        </Box>
    );
}
