import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { NativeBaseProvider, View } from 'native-base';
import { nativeBaseTheme } from '@/styles/theme';
import { useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import RoutesComponent from '@/routes/index';

//Tentei utilizar a lib de linear-gradiente "react-native-linear-gradient", para fazer o gradient na aplicação, porém identifiquei que estava depreciada e optei pelo expo-linear-gradient

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    const [fontsLoaded] = useFonts({
        'Gilroy-Bold': require('@/assets/fonts/Gilroy-Bold.ttf'),
        'Gilroy-Medium': require('@/assets/fonts/Gilroy-Medium.ttf'),
        'Gilroy-Regular': require('@/assets/fonts/Gilroy-Regular.ttf'),
        'Gilroy-SemiBold': require('@/assets/fonts/Gilroy-SemiBold.ttf'),
        'Gilroy-Heavy': require('@/assets/fonts/Gilroy-Heavy.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            console.log('** App is Ready **');
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    useEffect(() => {
        if (fontsLoaded) {
            setTimeout(() => {
                setAppIsReady(true);
                SplashScreen.hideAsync();
            }, 750);
        }
    }, [fontsLoaded]);

    if (!appIsReady) {
        return null;
    }

    return (
        <NativeBaseProvider theme={nativeBaseTheme}>
            <View onLayout={onLayoutRootView} flex={1} width={'100%'} maxWidth={800}>
                <RoutesComponent />
                <StatusBar style="auto" />
            </View>
        </NativeBaseProvider>
    );
}

LogBox.ignoreLogs([
    'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
]);

// Problema apresentado recente no NativeBase https://github.com/GeekyAnts/NativeBase/issues/5758
