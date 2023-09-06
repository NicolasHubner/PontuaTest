import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'native-base';

interface IBackGround {
    uri: string;
    alt: string;
}

export default function BackGround({ uri, alt }: IBackGround) {
    return (
        <>
            <LinearGradient
                colors={['#c4c4c416', '#000000c0']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 812,
                    zIndex: 0,
                }}
            />
            <Image
                source={{ uri: uri }}
                alt={alt}
                w={'100%'}
                h={'812px'}
                resizeMethod="auto"
                position={'absolute'}
                top={0}
                zIndex={-1}
            />
        </>
    );
}
