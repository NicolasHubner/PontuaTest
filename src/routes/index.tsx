import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './Auth';
import MainNavigator from './Main';
import useAuth from '@/hooks/useAuth';

export default function RoutesComponent() {
    const isLoggedIn = useAuth();

    return (
        <NavigationContainer>
            {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}
