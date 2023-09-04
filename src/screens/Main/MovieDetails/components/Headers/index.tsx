import { View } from 'native-base';
import ArrowLeft from '@/assets/Svg/ArrowLeft.svg';
import { useNavigation } from '@react-navigation/native';
import { INavigation } from '@/helpers/interfaces/INavigation';

export default function HeaderMovieDetails() {
    const navigate = useNavigation() as INavigation;
    return (
        <View w={'100%'} pl={'24px'} h={'32px'} alignItems={'flex-start'} justifyContent={'center'}>
            <ArrowLeft onPress={() => navigate.goBack()} width={24} height={24} />
        </View>
    );
}
