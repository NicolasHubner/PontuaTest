import { ScrollViewWrapper } from '@/components/View';
import { Box, Image } from 'native-base';
import { useState } from 'react';
import InputsSingIn from './InputsLogin/inputs';
import { ImageBackground } from 'react-native';
import { SocialLogin } from './InputsLogin/SocialLogin';

export default function Login() {
    const [show, setShow] = useState(false);

    return (
        <ScrollViewWrapper edges={['left', 'right']}>
            <Image
                alt="Black Panther"
                source={require('@/assets/images/BlackPanther.png')}
                position={'absolute'}
                zIndex={-1}
                top={0}
                right={0}
                left={0}
            />

            <ImageBackground
                style={{
                    width: '100%',
                    alignItems: 'center',
                    height: 700,
                    marginTop: 180,
                    // paddingBottom: 60,
                    paddingTop: 110,
                    // overflow: 'hidden',
                }}
                alt="BackGroundBlur"
                source={require('@/assets/images/Background.png')}>
                <Image
                    alt="Objects"
                    source={require('@/assets/images/Objects.png')}
                    position={'absolute'}
                    zIndex={0}
                    top={10}
                    right={-5}
                    blurRadius={1.5}
                    style={{ transform: [{ rotate: '-1deg' }] }}
                />
                <InputsSingIn show={show} setShow={setShow} />
            </ImageBackground>
        </ScrollViewWrapper>
    );
}
