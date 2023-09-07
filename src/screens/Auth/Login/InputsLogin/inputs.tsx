import { Box, useTheme, Text, Toast, Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { INavigation } from '@/helpers/interfaces/INavigation';
import { TouchableOpacity } from 'react-native';
import { Routes } from '@/routes/routes';
import { Title } from './Title';
import { SocialLogin } from './SocialLogin';
import { TextInputs } from '@/components/TextInputs';
import { ComponentLogin } from '@/components/GradientsBox';
import { InputsAuth } from '@/components/Inputs';
import { ButtonAuth } from '@/components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER_INFO } from '@/store/reducers/profileSlice';
import { UseFakeLogin } from '@/helpers/functions/LoginFunction';
import { RequestApiFake } from '@/helpers/interfaces/RequestApi';

type FormData = {
    email: string;
    password: string;
};

// Utilizei React Hook Form para validação dos campos e envio dos dados
// Evitando reenderizações desnecessárias para aumentar perfomance do usuario

const STORAGE_USER_KEY = '@GenteCultura/user';

export default function InputsSingIn() {
    const [show, setShow] = useState(false);

    const [loading, setLoading] = useState(false);

    const navigator = useNavigation<INavigation>();

    const { colors } = useTheme();

    const { control, handleSubmit } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const dispatch = useDispatch();

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            const response = (await UseFakeLogin(data)) as RequestApiFake;

            setTimeout(() => {
                dispatch(SET_USER_INFO({ isLogged: true, token: response.token }));
                dispatch(SET_USER_INFO({ name: 'Teste', email: data.email }));
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

    return (
        <Box alignItems={'center'} w={'100%'}>
            <Title />

            <TextInputs textInput="Usuário" />

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
                                <ComponentLogin>
                                    <InputsAuth
                                        field={field}
                                        keyboardType="email-address"
                                        inputLeftElement={
                                            <Ionicons
                                                name="person"
                                                size={16}
                                                color={colors.gray[400]}
                                                style={{ marginLeft: 16 }}
                                            />
                                        }
                                    />
                                </ComponentLogin>
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

                <TextInputs textInput="Senha" />

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
                                <ComponentLogin>
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
                                </ComponentLogin>
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
                        color={colors.primary[600]}
                        textAlign={'right'}
                        lineHeight={16.99}
                        fontWeight={'500'}
                        fontSize={11.33}>
                        Forgot Password?
                    </Text>
                </Box>
            </TouchableOpacity>

            <ButtonAuth
                loading={loading}
                handleSubmit={handleSubmit(onSubmit)}
                label={'entrar'}
                marginTop={4}
            />

            <SocialLogin setLoading={setLoading} loading={loading} />

            <Pressable onPress={() => navigator.navigate(Routes.Auth.REGISTER)}>
                <Text
                    color={colors.primary[600]}
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
