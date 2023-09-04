import {
    NativeStackNavigationOptions,
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { Routes } from '../routes';
import * as Screens from '@/screens';

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    orientation: 'portrait',
    animation: 'fade',
};

export function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName={Routes.Auth.LOGIN} screenOptions={screenOptions}>
            <Stack.Screen name={Routes.Auth.LOGIN} component={Screens.LOGIN} />

            <Stack.Screen name={Routes.Auth.REGISTER} component={Screens.REGISTER} />

            <Stack.Screen name={Routes.Auth.FORGOT_PASSWORD} component={Screens.FORGOT_PASSWORD} />
        </Stack.Navigator>
    );
}
