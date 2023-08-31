import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../routes';
import * as Screens from '@/screens';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={Routes.Main.HOME}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={Routes.Main.HOME} component={Screens.HOME} />

            <Stack.Screen name={Routes.Main.MOVIE_DETAILS} component={Screens.MOVIE_DETAILS} />

            <Stack.Screen name={Routes.Main.MOVIE_SEARCH} component={Screens.SEARCH} />
        </Stack.Navigator>
    );
}
