import { getDatabase, ref, set } from 'firebase/database';
import { getFirebaseClient } from '.';
// import { DATABASE } from '.';

interface UserProps {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}

export const WriteUserData = ({ name, email, password, confirmPassword }: UserProps) => {
    const firebase = getFirebaseClient();
    const db = getDatabase(firebase);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                set(ref(db, 'users/' + name), {
                    username: name,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                });
                resolve('Usuário cadastrado com sucesso!');
            } catch (error) {
                reject(error);
            }
        }, 2000);
    });
};
