import { Input, useTheme } from 'native-base';
import { KeyboardType } from 'react-native';

interface IInputsAuth {
    field: any;
    inputLeftElement?: JSX.Element;
    inputRightElement?: JSX.Element;
    keyboardType?: KeyboardType;
    secureTextEntry?: boolean;
}

export const InputsAuth = ({
    field,
    inputLeftElement,
    inputRightElement,
    keyboardType = 'default',
    secureTextEntry = false,
}: IInputsAuth) => {
    const { colors } = useTheme();
    return (
        <Input
            w={{
                base: '100%',
                md: '25%',
            }}
            h={'55px'}
            borderRadius={8}
            borderColor={'transparent'}
            selectionColor={colors.primary[600]}
            cursorColor={colors.primary[600]}
            value={field.value}
            color={colors.primary[600]}
            fontSize={14}
            textDecoration={'none'}
            fontWeight={'500'}
            lineHeight={21.49}
            focusOutlineColor={'transparent'}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            InputLeftElement={inputLeftElement}
            InputRightElement={inputRightElement}
        />
    );
};
