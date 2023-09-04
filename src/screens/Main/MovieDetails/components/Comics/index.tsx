import Card from '@/components/Cards';
import { api } from '@/service/api';
import {
    getComicsFromCharacter,
    getComicsFromEvents,
    getComicsFromSeries,
} from '@/service/api/url';
import { ComicData } from '@/types/Comics';
import { MarvelEvent } from '@/types/Events';
import { ComicSeries } from '@/types/Series';
import { View, useTheme, Text, ScrollView, Skeleton } from 'native-base';
import { useEffect, useState } from 'react';

interface ComicsProps {
    id: number;
    type: string;
}

export default function Comics({ id, type }: ComicsProps) {
    const [comics, setComics] = useState<ComicData[] | MarvelEvent[]>([]);

    useEffect(() => {
        const getComics = async () => {
            switch (type) {
                case 'characters':
                    await api.get(getComicsFromCharacter(id)).then(({ data }) => {
                        setComics(data.data.results);
                    });
                    break;
                case 'comics':
                    setComics([]);
                    break;
                case 'series':
                    await api
                        .get(getComicsFromSeries(id))
                        .then(({ data }) => setComics(data.data.results));
                    break;
                case 'events':
                    await api
                        .get(getComicsFromEvents(id))
                        .then(({ data }) => setComics(data.data.results));
                    break;
                default:
                    break;
            }
        };
        getComics();
    }, [id, type]);

    const { colors } = useTheme();
    return (
        <View
            mt={'40px'}
            w={'100%'}
            px={'24px'}
            flexDir={'column'}
            alignItems={'flex-start'}
            justifyContent={'flex-start'}>
            <Text lineHeight={'18px'} fontSize={'18px'} fontWeight={700} color={colors.white}>
                Quadrinhos
            </Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {comics.length === 0 &&
                    Array.from({ length: 3 }).map((_, index) => (
                        <Skeleton
                            key={index}
                            w={'140px'}
                            h={'230px'}
                            borderRadius={'16px'}
                            mr={'16px'}
                            mt={'20px'}
                            bgColor={colors.gray[700]}
                        />
                    ))}
                {type !== 'comics' &&
                    (comics as ComicData[]).map((comic, index) => (
                        <View mt={'20px'} key={index}>
                            <Card
                                id={comic.id}
                                title={'comics'}
                                name={comic.title}
                                item={comic}
                                uri={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                i={index}
                            />
                        </View>
                    ))}
            </ScrollView>
        </View>
    );
}
