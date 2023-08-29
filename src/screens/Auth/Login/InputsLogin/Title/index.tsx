import { Box, Text } from 'native-base';

export const Title = () => {
    return (
        <Box>
            <Text
                color={'white'}
                fontSize={40.33}
                fontWeight={'bold'}
                lineHeight={60.49}
                letterSpacing={2}
                textAlign={'center'}>
                Faça login
            </Text>

            <Text
                color={'white'}
                fontSize={14.33}
                fontWeight={'normal'}
                lineHeight={21.49}
                letterSpacing={1}
                textAlign={'center'}>
                seja bem-vindo novamente.
            </Text>
        </Box>
    );
};
