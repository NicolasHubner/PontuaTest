import { extendTheme, Input } from 'native-base';

export const nativeBaseTheme = extendTheme({
    colors: {
        primary: {
            50: '#F2264B',
            100: '#000000',
            200: '#313140',
            300: '#B7B7C8',
            400: '#F8F8F8',
            500: '#FFFFFF',
            600: '#A4A4A4',
            700: '#b6b6b6',
        },
    },
    config: {
        initialColorMode: 'light',
    },
    fontConfig: {
        Gilroy: {
            100: {
                normal: 'Gilroy-Light',
            },
            200: {
                normal: 'Gilroy-Light',
            },
            300: {
                normal: 'Gilroy-Light',
            },
            400: {
                normal: 'Gilroy-Regular',
            },
            500: {
                normal: 'Gilroy-Medium',
            },
            600: {
                normal: 'Gilroy-Bold',
            },
            700: {
                normal: 'Gilroy-Bold',
            },
            800: {
                normal: 'Gilroy-Bold',
            },
            900: {
                normal: 'Gilroy-Bold',
            },
        },
    },
    fonts: {
        heading: 'Gilroy',
        body: 'Gilroy',
        mono: 'Gilroy',
    },
    components: {
        Input: {
            variants: {
                outline: {
                    field: {
                        borderColor: 'primary.300',
                        _focus: {
                            borderColor: 'primary.300',
                        },
                    },
                },
                _focus: {
                    field: {
                        borderColor: 'primary.300',
                        _focus: {
                            borderColor: 'primary.300',
                        },
                        android: {
                            selectionColor: 'primary.300',
                        },
                        ios: {
                            selectionColor: 'primary.300',
                        },
                    },
                },
            },
        },
    },
});
