import {
    NativeStackNavigationOptions,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { Routes } from '../routes';
import * as Screens from '@/screens';
import { Text } from 'native-base';

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    orientation: 'portrait',
    animation: 'fade',
    contentStyle: {
        backgroundColor: '#F8f8f8',
    },
};

export default function MainNavigator() {
    return (
        <Stack.Navigator initialRouteName={Routes.Main.HOME} screenOptions={screenOptions}>
            <Stack.Screen name={Routes.Main.HOME} component={Screens.HOME} />

            <Stack.Screen
                options={{
                    ...screenOptions,
                    animation: 'slide_from_right',
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: '#000',
                    },
                }}
                name={Routes.Main.MOVIE_DETAILS}
                component={Screens.MOVIE_DETAILS}
            />

            <Stack.Screen
                options={{
                    ...screenOptions,
                    animation: 'slide_from_right',
                    headerShown: false,
                    headerTitle: '',
                }}
                name={Routes.Main.MOVIE_SEARCH}
                component={Screens.SEARCH}
            />
        </Stack.Navigator>
    );
}
