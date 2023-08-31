import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'native-base';
import { ScrollViewWrapper } from '@/components/View';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const register = async () => {
    //     try {
    //         const res = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);

    //         const docRef = await addDoc(collection(DATABASE, 'users'), {
    //             first: 'Ada',
    //             last: 'Lovelace',
    //             born: 1815,
    //         });

    //         console.log('Document written with ID: ', docRef.id);

    //         console.log(res);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    return (
        <ScrollViewWrapper edges={['left', 'right']}>
            <Image
                alt="Black Panther"
                source={require('@/assets/images/BlackPanther.png')}
                // style={{ width: 400, height: 600 }}
                position={'absolute'}
                zIndex={-1}
                top={0}
                right={0}
                blurRadius={3}
                left={0}
            />
        </ScrollViewWrapper>
    );
}
