import { LinearGradient } from 'expo-linear-gradient';
import { Text, Button, Box, Spinner } from 'native-base';

interface ButtonAuthProps {
    loading: boolean;
    handleSubmit: () => void;
    label: string;
    marginTop?: number;
}

export const ButtonAuth = ({ loading, handleSubmit, label, marginTop = 12 }: ButtonAuthProps) => {
    return (
        <Box
            w={{
                base: '314px',
                md: '25%',
            }}
            mt={marginTop}>
            <LinearGradient
                colors={['#ED1D2F', '#BF2EB9']}
                start={[0, 0]}
                end={[1, 0]}
                style={{ borderRadius: 15 }}>
                <Button
                    disabled={loading}
                    h={12}
                    backgroundColor={'transparent'}
                    w={'100%'}
                    borderRadius={15}
                    onPress={handleSubmit}>
                    {!loading && (
                        <Text
                            textAlign={'center'}
                            color={'#FFFFFF'}
                            fontWeight={'500'}
                            fontSize={17.92}
                            lineHeight={26.88}
                            letterSpacing={1.25}>
                            {label.toLocaleLowerCase()}
                        </Text>
                    )}
                    {loading && (
                        <Spinner accessibilityLabel="Loading Login" size="sm" color="white" />
                    )}
                </Button>
            </LinearGradient>
        </Box>
    );
};
