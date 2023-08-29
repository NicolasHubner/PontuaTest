import { DATABASE, FIREBASE_APP } from '@/service/firebase';
import { collection, getFirestore, getDoc, doc } from 'firebase/firestore/lite';
import JWT from 'expo-jwt';

export const secretKey = 'SIMULANDO_SECRET_KEY';

interface LoginProps {
    email: string;
    password: string;
}

export async function UseLogin({ email, password }: LoginProps) {
    try {
        const querySnapshot = await getDoc(doc(collection(DATABASE, 'users'), email));

        console.log(querySnapshot);
    } catch (error) {
        console.log(error);
    }
}
