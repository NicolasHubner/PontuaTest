import { View } from 'native-base';
import ArrowLeft from '@/assets/Svg/ArrowLeft.svg';
import { useNavigation } from '@react-navigation/native';
import { INavigation } from '@/helpers/interfaces/INavigation';
import { TouchableOpacity } from 'react-native';

interface Props {
    color?: string;
}

export default function HeaderPatterArrowLeft({ color = '#FFF' }: Props) {
    const navigate = useNavigation() as INavigation;
    return (
        <View w={'100%'} pl={'24px'} h={'32px'} alignItems={'flex-start'} justifyContent={'center'}>
            <TouchableOpacity onPress={() => navigate.goBack()}>
                <ArrowLeft fill={color} width={24} height={24} />
            </TouchableOpacity>
        </View>
    );
}

export const HeaderAbsoluteArrowLeft = ({ color = '#FFF' }: Props) => {
    const navigate = useNavigation() as INavigation;
    return (
        <View position={'absolute'} top={8} left={8} zIndex={1}>
            <TouchableOpacity onPress={() => navigate.goBack()}>
                <ArrowLeft fill={color} width={24} height={24} />
            </TouchableOpacity>
        </View>
    );
};
