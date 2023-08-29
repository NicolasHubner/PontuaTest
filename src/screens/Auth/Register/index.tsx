import React, { useState } from 'react';
import { View, Text } from 'native-base';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { DATABASE, FIREBASE_AUTH } from '@/service/firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            const res = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);

            const docRef = await addDoc(collection(DATABASE, 'users'), {
                first: 'Ada',
                last: 'Lovelace',
                born: 1815,
            });

            console.log('Document written with ID: ', docRef.id);

            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View>
            <Text>Register</Text>
        </View>
    );
}
