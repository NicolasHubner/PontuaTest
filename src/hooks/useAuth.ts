import { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

// Estou simulando um hook de autenticação para não ter que criar um contexto e um provider para isso agora
export function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('@GenteCultura/user').then(u => {
            if (u) {
                setUser(JSON.parse(u));
            }
            console.log(u);
        });
        // AsyncStorage.removeItem('@GenteCultura/user');
        return () => {
            setUser(null);
        };
    }, []);

    return user;
}

export default useAuth;
