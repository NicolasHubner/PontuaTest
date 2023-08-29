import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../routes';
import * as Screens from '@/screens';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={Routes.NoAuth.LOGIN}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={Routes.NoAuth.LOGIN} component={Screens.LOGIN} />

            <Stack.Screen name={Routes.NoAuth.REGISTER} component={Screens.REGISTER} />

            <Stack.Screen
                name={Routes.NoAuth.FORGOT_PASSWORD}
                component={Screens.FORGOT_PASSWORD}
            />
        </Stack.Navigator>
    );
}
