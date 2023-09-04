import { KeyboardAvoidingView } from 'native-base';
import React from 'react';
import { ScrollView, FlexStyle, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface PageWrapperProps {
    children: React.ReactNode;
    justifyContent?: FlexStyle['justifyContent'];
    alignItems?: FlexStyle['alignItems'];
    edges?: Array<'top' | 'right' | 'left' | 'bottom'>;
    paddingTop?: number;
}

export const PageWrapper = ({
    children,
    justifyContent = 'center',
    alignItems = 'center',
    edges = ['top', 'right', 'left', 'bottom'],
    paddingTop = 40,
}: PageWrapperProps) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'transparent',
                alignItems: alignItems,
                justifyContent: justifyContent,
                paddingTop: paddingTop,
            }}
            edges={edges}>
            {children}
        </SafeAreaView>
    );
};

interface ScrollViewWrapperProps extends PageWrapperProps {
    setRef?: React.Dispatch<React.SetStateAction<ScrollView | null>>;
    paddingBottom?: number;
}

export const ScrollViewWrapper = ({
    children,
    justifyContent = 'center',
    alignItems = 'center',
    edges = ['top', 'right', 'left', 'bottom'],
    paddingTop = 40,
    paddingBottom = 0,
    setRef,
}: ScrollViewWrapperProps) => {
    const scrollViewRef = React.useRef<ScrollView>(null);

    React.useEffect(() => {
        setRef?.(scrollViewRef.current);
    }, [setRef]);

    return (
        <SafeAreaView
            edges={edges}
            style={{
                flex: 1,
                backgroundColor: 'transparent',
                width: '100%',
            }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{
                    flex: 1,
                    width: '100%',
                }}>
                <ScrollView
                    ref={scrollViewRef}
                    contentContainerStyle={{
                        flexGrow: 1,
                        alignItems: alignItems,
                        justifyContent: justifyContent,
                        width: '100%',
                        paddingTop: paddingTop,
                        paddingBottom: paddingBottom,
                        // height: Dimensions.get('window').height,
                    }}
                    showsVerticalScrollIndicator={false}>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
