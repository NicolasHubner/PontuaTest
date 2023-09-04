import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'native-base';
import { ScrollViewWrapper } from '@/components/View';
import { TitleForgot } from './TItleForgot';
import { InputForgotEmail, InputsCodeVerificaded, InputsCodeVerification } from './InputsForgot';
import { Animated, View } from 'react-native';
import { set } from 'react-hook-form';

enum StatusForgotPassword {
    INITIAL = 'initial',
    SEND_EMAIL = 'send_email',
    CODE_VERIFICADED = 'code_verificaded',
}

export default function ForgotPassword() {
    const [loading, setLoading] = useState<boolean>(false);

    const [status, setStatus] = useState<StatusForgotPassword>(StatusForgotPassword.INITIAL);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        fadeOut();

        setTimeout(() => {
            fadeIn();
        }, 500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    useEffect(() => {
        fadeIn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ScrollViewWrapper justifyContent={'flex-start'} edges={['left', 'right']}>
            <Image
                alt="Black Panther"
                source={require('@/assets/images/BlackPanther.png')}
                position={'absolute'}
                zIndex={-1}
                top={0}
                right={0}
                blurRadius={4}
                left={0}
            />

            <TitleForgot />

            <Animated.View style={[{ marginTop: 96 }, { opacity: fadeAnim }]}>
                {status === StatusForgotPassword.INITIAL && (
                    <InputForgotEmail setStatus={setStatus} />
                )}

                {status === StatusForgotPassword.SEND_EMAIL && (
                    <InputsCodeVerification setStatus={setStatus} />
                )}

                {status === StatusForgotPassword.CODE_VERIFICADED && (
                    <InputsCodeVerificaded setStatus={setStatus} />
                )}
            </Animated.View>
        </ScrollViewWrapper>
    );
}
