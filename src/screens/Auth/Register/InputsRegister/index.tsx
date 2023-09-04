import { Box, Input, useTheme, Text, Button, Spinner, Toast, Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { INavigation } from '@/helpers/interfaces/INavigation';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInputs } from '@/components/TextInputs';
import { ComponentRegister } from '@/components/GradientsBox';
import { InputsAuth } from '@/components/Inputs';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonAuth } from '@/components/Buttons';

type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

// Utilizei React Hook Form para validação dos campos e envio dos dados
// Evitando reenderizações desnecessárias para aumentar perfomance do usuario

const STORAGE_USER_KEY = '@GenteCultura/user';

export default function InputsRegister() {
    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const navigator = useNavigation<INavigation>();

    const { colors } = useTheme();

    const { control, handleSubmit } = useForm<FormData>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

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
            console.error(error);
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
            <Box>
                <TextInputs textInput={'Nome completo'} />

                <Box w={'314px'} mb={2} backgroundColor={'transparent'}>
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
                                <ComponentRegister>
                                    <InputsAuth
                                        keyboardType="email-address"
                                        inputLeftElement={
                                            <Ionicons
                                                name="person"
                                                size={16}
                                                color={colors.gray[400]}
                                                style={{ marginLeft: 16 }}
                                            />
                                        }
                                        field={field}
                                    />
                                </ComponentRegister>
                                {fieldState.error && (
                                    <Text fontSize={10} style={{ color: 'red' }}>
                                        {fieldState.error.message}
                                    </Text>
                                )}
                            </>
                        )}
                        name="name"
                    />
                </Box>

                <TextInputs textInput={'Email'} />

                <Box w={'314px'} mb={2} backgroundColor={'transparent'}>
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
                                <ComponentRegister>
                                    <InputsAuth
                                        keyboardType="email-address"
                                        inputLeftElement={
                                            <MaterialIcons
                                                name="email"
                                                size={16}
                                                color={colors.gray[400]}
                                                style={{ marginLeft: 16 }}
                                            />
                                        }
                                        field={field}
                                    />
                                </ComponentRegister>
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

                <TextInputs textInput={'Senha'} />

                <Box w={'314px'} mb={2} backgroundColor={'transparent'}>
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
                                <ComponentRegister>
                                    <InputsAuth
                                        field={field}
                                        secureTextEntry={!show}
                                        inputLeftElement={
                                            <Ionicons
                                                name="lock-closed"
                                                size={16}
                                                color={colors.primary[600]}
                                                style={{ marginLeft: 16 }}
                                            />
                                        }
                                        inputRightElement={
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
                                </ComponentRegister>
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

                <TextInputs textInput={'Confirmar senha'} />

                <Box w={'314px'} mb={2} backgroundColor={'transparent'}>
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
                                <ComponentRegister>
                                    <InputsAuth
                                        field={field}
                                        secureTextEntry={!show2}
                                        inputLeftElement={
                                            <Ionicons
                                                name="lock-closed"
                                                size={16}
                                                color={colors.primary[600]}
                                                style={{ marginLeft: 16 }}
                                            />
                                        }
                                        inputRightElement={
                                            !show2 ? (
                                                <Ionicons
                                                    name="eye"
                                                    size={16}
                                                    color={colors.primary[600]}
                                                    style={{ marginRight: 16 }}
                                                    onPress={() => setShow2(!show2)}
                                                />
                                            ) : (
                                                <Ionicons
                                                    name="eye-off"
                                                    size={16}
                                                    color={colors.primary[600]}
                                                    style={{ marginRight: 16 }}
                                                    onPress={() => setShow2(!show2)}
                                                />
                                            )
                                        }
                                    />
                                </ComponentRegister>
                                {fieldState.error && (
                                    <Text fontSize={10} style={{ color: 'red' }}>
                                        {fieldState.error.message}
                                    </Text>
                                )}
                            </>
                        )}
                        name="confirmPassword"
                    />
                </Box>
            </Box>

            <ButtonAuth
                loading={loading}
                handleSubmit={handleSubmit(onSubmit)}
                label={'cadastrar'}
            />

            <Pressable onPress={() => navigator.goBack()}>
                <Text
                    color={colors.primary[600]}
                    fontSize={11.33}
                    fontWeight={'500'}
                    mt={4}
                    lineHeight={16.99}>
                    Já possui uma conta?<Text color={'#BF2EB9'}> Login</Text>
                </Text>
            </Pressable>
        </Box>
    );
}
