import { Box, Text } from 'native-base';
import { useWindowDimensions } from 'react-native';

export const TitleRegister = () => {
    return (
        <Text
            color={'white'}
            fontSize={30.33}
            fontWeight={'bold'}
            mb={'24px'}
            mt={useWindowDimensions().height > 700 ? 16 : '16px'}
            letterSpacing={2}
            textAlign={'center'}>
            Faça seu registro
        </Text>
    );
};
