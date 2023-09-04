import { ComponentRegister } from '@/components/GradientsBox';
import { InputsAuth } from '@/components/Inputs';
import { TextInputs } from '@/components/TextInputs';
import { Box, useTheme, Text, useToast } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonAuth, ButtonTimer } from '@/components/Buttons';
import { useEffect, useState } from 'react';
import { INavigation } from '@/helpers/interfaces/INavigation';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@/routes/routes';

enum StatusForgotPassword {
    INITIAL = 'initial',
    SEND_EMAIL = 'send_email',
    CODE_VERIFICADED = 'code_verificaded',
}

type FormDataEmail = {
    email: string;
};

type FormDataCodeVerificaded = {
    password: string;
    confirmPassowrd: string;
};

type FormDataCodeVerification = {
    code: string;
};

interface InputForgotProps {
    setStatus: React.Dispatch<React.SetStateAction<StatusForgotPassword>>;
}

interface InputCodeVerificationProps extends InputForgotProps {}

interface InputCodeVerificadedProps extends InputForgotProps {}

export const InputForgotEmail = ({ setStatus }: InputForgotProps) => {
    const { control, handleSubmit } = useForm<FormDataEmail>({
        defaultValues: {
            email: '',
        },
    });

    const { colors } = useTheme();

    return (
        <>
            <Box alignItems={'center'} justifyContent={'center'}>
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
            </Box>

            <ButtonAuth
                loading={false}
                handleSubmit={() => setStatus(StatusForgotPassword.SEND_EMAIL)}
                label={'recuperar senha'}
            />
        </>
    );
};

export const InputsCodeVerification = ({ setStatus }: InputCodeVerificationProps) => {
    const { control, handleSubmit } = useForm<FormDataCodeVerification>({
        defaultValues: {
            code: '',
        },
    });

    const toast = useToast();

    const onSubmit = (data: FormDataCodeVerification) => {
        if (data.code === '123456') {
            setStatus(StatusForgotPassword.CODE_VERIFICADED);
        } else {
            toast.show({
                description: 'Código inválido',
                placement: 'bottom',
            });
        }
    };

    const [timer, setTimer] = useState<number>(45);

    const [timesTimer, setTimesTimer] = useState<number>(0);

    const [isTimerOn, setIsTimerOn] = useState<boolean>(false);

    useEffect(() => {
        if (isTimerOn && timer > 0) {
            setTimeout(() => {
                setTimer(timer - 1);
            }, 1000);
        }
        if (timer === 0) {
            setIsTimerOn(false);
            setTimer(45);
            setTimesTimer(timesTimer + 1);
        }
    }, [isTimerOn, timer, timesTimer]);

    const resendCode = () => {
        if (timesTimer > 0) {
            toast.show({
                description: `Você já reenviou o código ${timesTimer} vez, verifique sua caixa de e-mail ou spam`,
                placement: 'bottom',
                textAlign: 'center',
            });
            return;
        }
        toast.show({
            description: 'Código enviado para seu email',
            placement: 'bottom',
        });
        setIsTimerOn(true);
    };
    return (
        <>
            <Box alignItems={'center'} justifyContent={'center'}>
                <TextInputs textInput={'Código de verificação'} />

                <Box w={'314px'} mb={2} backgroundColor={'transparent'}>
                    <Controller
                        control={control}
                        rules={{
                            required: 'Código é obrigatório',
                            minLength: {
                                value: 6,
                                message: 'Código deve ter 6 dígitos',
                            },
                        }}
                        render={({ field, fieldState }) => (
                            <>
                                <ComponentRegister>
                                    <InputsAuth keyboardType="number-pad" field={field} />
                                </ComponentRegister>
                                {fieldState.error && (
                                    <Text fontSize={10} style={{ color: 'red' }}>
                                        {fieldState.error.message}
                                    </Text>
                                )}
                            </>
                        )}
                        name="code"
                    />
                </Box>
            </Box>

            <ButtonTimer
                loading={timer === 45 || timer === 0 ? false : true}
                handleSubmit={resendCode}
                label={timer === 45 || timer === 0 ? 'reenvie código' : timer.toString()}
            />

            <ButtonAuth
                loading={false}
                handleSubmit={handleSubmit(onSubmit)}
                label={'confirmar código'}
            />
        </>
    );
};

export const InputsCodeVerificaded = ({ setStatus }: InputCodeVerificadedProps) => {
    const { control, handleSubmit } = useForm<FormDataCodeVerificaded>({
        defaultValues: {
            password: '',
            confirmPassowrd: '',
        },
    });

    const navigator = useNavigation() as INavigation;

    const toast = useToast();

    const onSubmit = (data: FormDataCodeVerificaded) => {
        if (data.password === data.confirmPassowrd) {
            toast.show({
                description: 'Senha alterada com sucesso',
                placement: 'bottom',
            });
            navigator.navigate(Routes.Auth.LOGIN);
            setStatus(StatusForgotPassword.INITIAL);
        } else {
            toast.show({
                description: 'Senhas não conferem',
                placement: 'bottom',
            });
        }
    };

    return (
        <>
            <Box alignItems={'center'} justifyContent={'center'}>
                <TextInputs textInput={'Senha'} />

                <Box w={'314px'} mb={2} backgroundColor={'transparent'}>
                    <Controller
                        control={control}
                        rules={{
                            required: 'Senha é obrigatório',
                            minLength: {
                                value: 6,
                                message: 'Código deve ter 6 dígitos',
                            },
                        }}
                        render={({ field, fieldState }) => (
                            <>
                                <ComponentRegister>
                                    <InputsAuth keyboardType="number-pad" field={field} />
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
                            required: 'Senha é obrigatório',
                            minLength: {
                                value: 6,
                                message: 'Código deve ter 6 dígitos',
                            },
                        }}
                        render={({ field, fieldState }) => (
                            <>
                                <ComponentRegister>
                                    <InputsAuth keyboardType="number-pad" field={field} />
                                </ComponentRegister>
                                {fieldState.error && (
                                    <Text fontSize={10} style={{ color: 'red' }}>
                                        {fieldState.error.message}
                                    </Text>
                                )}
                            </>
                        )}
                        name="confirmPassowrd"
                    />
                </Box>
            </Box>
            <ButtonAuth
                loading={false}
                handleSubmit={handleSubmit(onSubmit)}
                label={'Cadastrar nova senha'}
            />
        </>
    );
};
