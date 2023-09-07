import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'native-base';
import { ScrollViewWrapper } from '@/components/View';
import InputsRegister from './InputsRegister';
import { TitleRegister } from './TitleRegister';

export default function Register() {
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
