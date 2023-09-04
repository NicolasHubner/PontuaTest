import { Box, Text, useTheme } from 'native-base';

export const TextInputs = ({ textInput }: { textInput: string }) => {
    const { colors } = useTheme();
    return (
        <Box
            w={{
                base: '314px',
                md: '25%',
            }}>
            <Text
                color={colors.primary[600]}
                fontSize={14.33}
                fontWeight={'500'}
                lineHeight={21.49}
                mb={2}
                letterSpacing={1}
                textAlign={'left'}>
                {textInput}
            </Text>
        </Box>
    );
};
