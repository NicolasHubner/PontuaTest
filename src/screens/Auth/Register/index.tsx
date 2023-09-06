import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'native-base';
import { ScrollViewWrapper } from '@/components/View';
import InputsRegister from './InputsRegister';
import { TitleRegister } from './TitleRegister';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { DATABASE, FIREBASE_AUTH } from '@/service/firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            // const res = await createUserWithEmailAndPassword(
            //     FIREBASE_AUTH,
            //     'email@email.com',
            //     'nicolas13'
            // );

            const docRef = await addDoc(collection(DATABASE, 'users'), {
                first: 'Ada',
                last: 'Lovelace',
                born: 1815,
            });
            // console.log(docRef);
            // console.log('Document written with ID: ', docRef);

            // console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log('ronaldo');
        register();
    }, []);
    return (
        <ScrollViewWrapper justifyContent={'flex-start'} edges={['left', 'right']}>
            <Image
                alt="Black Panther"
                source={require('@/assets/images/BlackPanther.png')}
                position={'absolute'}
                zIndex={-1}
                top={0}
                right={0}
                blurRadius={4}
                left={0}
            />

            <TitleRegister />

            <InputsRegister />
        </ScrollViewWrapper>
    );
}
