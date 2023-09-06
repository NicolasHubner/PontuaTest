import { View } from 'native-base';
import ArrowLeft from '@/assets/Svg/ArrowLeft.svg';
import { useNavigation } from '@react-navigation/native';
import { INavigation } from '@/helpers/interfaces/INavigation';
import { TouchableOpacity } from 'react-native';

export default function HeaderMovieDetails() {
    const navigate = useNavigation() as INavigation;
    return (
        <View w={'100%'} pl={'24px'} h={'32px'} alignItems={'flex-start'} justifyContent={'center'}>
            <TouchableOpacity onPress={() => navigate.goBack()}>
                <ArrowLeft width={24} height={24} />
            </TouchableOpacity>
        </View>
    );
}
