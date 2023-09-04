import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'native-base';

interface ComponentRegisterProps {
    children: React.ReactNode;
}

export const ComponentLogin = ({ children }: ComponentRegisterProps) => {
    const { colors } = useTheme();

    return (
        <LinearGradient
            colors={['#ffffff38', '#21212134']}
            start={[0, 0]}
            end={[1, 0]}
            style={{
                borderRadius: 8,
                borderWidth: 0.3,
                borderColor: colors.primary[600],
            }}>
            {children}
        </LinearGradient>
    );
};

export const ComponentRegister = ({ children }: ComponentRegisterProps) => {
    const { colors } = useTheme();

    return (
        <LinearGradient
            colors={['#ffffff38', '#a1a1a146']}
            start={[0, 0]}
            end={[1, 0]}
            style={{
                borderRadius: 8,
                borderWidth: 0.3,
                borderColor: colors.primary[600],
            }}>
            {children}
        </LinearGradient>
    );
};
