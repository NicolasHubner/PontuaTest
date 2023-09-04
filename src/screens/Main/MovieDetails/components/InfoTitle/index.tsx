import { View, Text, useTheme } from 'native-base';
import { useEffect, useState } from 'react';

const initialData = [
    {
        title: 'Histórias',
        value: '10',
    },
    {
        title: 'Eventos',
        value: '7',
    },
    {
        title: 'Séries',
        value: '2',
    },
    {
        title: 'Quadrinhos',
        value: '1',
    },
];

interface IInfoTitle {
    title: string;
    histories: number;
    events: number;
    series: number;
    comics: number;
    description: string;
}

export const InfoTitle = ({
    title,
    histories,
    events,
    series,
    comics,
    description,
}: IInfoTitle) => {
    const { colors } = useTheme();
    const [values, setValues] = useState<typeof initialData>(initialData);

    useEffect(() => {
        setValues([
            {
                title: 'Histórias',
                value: histories.toString(),
            },
            {
                title: 'Eventos',
                value: events.toString(),
            },
            {
                title: 'Séries',
                value: series.toString(),
            },
            {
                title: 'Quadrinhos',
                value: comics.toString(),
            },
        ]);
    }, [histories, events, series, comics]);

    return (
        <View w={'100%'} px={'24px'} mt={'228px'}>
            <Text
                mt={'8px'}
                w={'80%'}
                fontSize={'40px'}
                fontWeight={500}
                lineHeight={'40px'}
                color={colors.white}>
                {title}
            </Text>

            <View
                flexDir={'row'}
                w={'100%'}
                mt={'48px'}
                // px={'24px'}
                gap={'29px'}
                justifyContent={'space-around'}>
                {values.map((item, index) => (
                    <View
                        key={index}
                        w={'71px'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        flexDir={'column'}
                        h={'48px'}>
                        <Text
                            fontSize={'20px'}
                            fontWeight={900}
                            lineHeight={'20px'}
                            color={colors.white}>
                            {item.value}
                        </Text>

                        <Text
                            fontSize={'12px'}
                            fontWeight={500}
                            letterSpacing={'0.4px'}
                            lineHeight={'12px'}
                            color={colors.white}>
                            {item.title}
                        </Text>
                    </View>
                ))}
            </View>

            <Text
                mt={'28px'}
                fontSize={'14px'}
                fontWeight={500}
                lineHeight={'14px'}
                opacity={0.75}
                letterSpacing={'0.4px'}
                color={colors.white}>
                {description.length === 0 ? 'No description' : description}
            </Text>
        </View>
    );
};
