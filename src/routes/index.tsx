import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './Auth';
import MainNavigator from './Main';
import useAuth from '@/hooks/useAuth';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function RoutesComponent() {
    const { isLogged } = useSelector((state: RootState) => state.profile);

    return (
        <NavigationContainer fallback={<></>}>
            {isLogged ? <MainNavigator /> : <AuthNavigator />}
            {/* <MainNavigator /> */}
        </NavigationContainer>
    );
}
