import { View, Text, useTheme } from 'native-base';

export const TitleHome = () => {
    const { colors } = useTheme();
    return (
        <View w={'100%'} paddingX={'24px'} mb={4}>
            <Text fontWeight={600} color={colors.primary['300']}>
                {' '}
                Bem vindo ao Pontua Marvel
            </Text>

            <Text
                fontWeight={500}
                fontSize={'32px'}
                color={colors.primary['200']}
                mt={'8px'}
                lineHeight={'32px'}>
                Escolha o seu personagem
            </Text>

            <Text
                w={'327px'}
                mt={'8px'}
                h={'70px'}
                fontWeight={600}
                fontSize={'14px'}
                color={colors.primary['300']}
                lineHeight={'14px'}>
                O Universo Marvel é o universo compartilhado onde ocorrem as histórias na maioria
                dos títulos de quadrinhos americanos e outras mídias publicadas pela Marvel
                Entertainment.
            </Text>
        </View>
    );
};
