import { View, Box, Image, Text } from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
import Logo from '@/assets/Svg/Home/Logo.svg';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { INavigation } from '@/helpers/interfaces/INavigation';
import { Routes } from '@/routes/routes';

export const Header = ({ loading }: { loading: boolean }) => {
    const navigator = useNavigation<INavigation>();
    return (
        <View flexDir={'row'} w={'100%'} justifyContent={'center'} h={'64px'}>
            <Logo width={'71px'} height={'26px'} />

            <TouchableOpacity
                disabled={loading}
                style={{ position: 'absolute', right: 24 }}
                onPress={() => navigator.navigate(Routes.Main.MOVIE_SEARCH)}>
                <EvilIcons name="search" size={32} color="#313140" />
            </TouchableOpacity>
        </View>
    );
};
