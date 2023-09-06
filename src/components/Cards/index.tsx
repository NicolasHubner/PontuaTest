import { Image, Pressable, Text } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Routes } from '@/routes/routes';
import { useNavigation } from '@react-navigation/native';
import { INavigation } from '@/helpers/interfaces/INavigation';

interface CardProps {
    id: number;
    title: string;
    name: string;
    item: any;
    uri: string;
    i: number;
}

export default function Card({ id, title, name, item, uri, i }: CardProps) {
    const navigate = useNavigation<INavigation>();

    return (
        <Pressable
            key={title + id}
            onPress={() =>
                navigate.navigate(Routes.Main.MOVIE_DETAILS, {
                    data: item,
                    type: title,
                })
            }
            borderRadius={'16px'}
            width={'140px'}
            height={'230px'}
            mb={'48px'}
            flexDir={'column'}
            justifyContent={'flex-end'}
            ml={i === 0 ? '0px' : '24px'}>
            <LinearGradient
                colors={['rgba(0,0,0,0)', '#000000be']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: 16,
                    flex: 1,
                    zIndex: 0,
                }}
            />
            <Image
                source={{
                    uri: uri,
                }}
                alt={name}
                width={'100%'}
                height={'100%'}
                borderRadius={'16px'}
                position={'absolute'}
                top={0}
                left={0}
                zIndex={-1}
            />
            <Text
                color={'#fff'}
                fontSize={'18px'}
                fontWeight={500}
                // lineHeight={'20px'}
                w={'90%'}
                mb={'12px'}
                flexWrap={'wrap'}
                ml={'12px'}
                textAlign={'left'}>
                {name}
            </Text>
        </Pressable>
    );
}
