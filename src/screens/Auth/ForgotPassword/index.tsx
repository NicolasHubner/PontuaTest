import React, { useEffect, useRef, useState } from 'react';
import { Image, View } from 'native-base';
import { ScrollViewWrapper } from '@/components/View';
import { TitleForgot } from './TItleForgot';
import { InputForgotEmail, InputsCodeVerificaded, InputsCodeVerification } from './InputsForgot';
import { Animated, TouchableOpacity, useWindowDimensions } from 'react-native';
import ArrowLeft from '@/assets/Svg/ArrowLeft.svg';
import { useNavigation } from '@react-navigation/native';
import { INavigation } from '@/helpers/interfaces/INavigation';
import { HeaderAbsoluteArrowLeft } from '@/components/Headers';

enum StatusForgotPassword {
    INITIAL = 'initial',
    SEND_EMAIL = 'send_email',
    CODE_VERIFICADED = 'code_verificaded',
}

export default function ForgotPassword() {
    const navigation = useNavigation<INavigation>();

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
        <>
            <HeaderAbsoluteArrowLeft />
            <ScrollViewWrapper justifyContent={'center'} edges={['left', 'right']}>
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

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: 'absolute', top: 56, left: 24 }}>
                    <ArrowLeft width={24} height={24} color={'white'} />
                </TouchableOpacity>
                <TitleForgot />

                <View
                    flexGrow={0.6}
                    justifyContent={'center'}
                    marginBottom={useWindowDimensions().height > 700 ? 24 : null}>
                    <Animated.View style={[{ opacity: fadeAnim }]}>
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
                </View>
            </ScrollViewWrapper>
        </>
    );
}
