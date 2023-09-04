import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Input, useTheme, Pressable } from 'native-base';
import { PageWrapper } from '@/components/View';
import { SearchData } from './searchData';
import { TypeMarvel } from '@/helpers/functions/isTypeMovieDetails';
import { useDebounce } from '@/hooks/useDebounce';
import { RootState } from '@/store/store';
import { Character } from '@/types/Characters';
import { ComicData } from '@/types/Comics';
import { MarvelEvent } from '@/types/Events';
import { ComicSeries } from '@/types/Series';
import { useSelector } from 'react-redux';
import { SearchInput } from './SearchInput';

enum SearchType {
    HEROES = 'Heróis',
    COMICS = 'Quadrinhos',
    SERIES = 'Séries',
    EVENTS = 'Eventos',
}

export default function Search() {
    const { characters, comics, series, events } = useSelector((state: RootState) => state.heroes);

    const [selected, setSelected] = useState<string>('Heróis');

    const [data, setData] = useState<Character[] | ComicData[] | ComicSeries[] | MarvelEvent[]>(
        characters
    );

    const { colors } = useTheme();

    // const isSelected = (type: SearchType) => {
    //     switch (type) {
    //         case SearchType.HEROES:
    //             return TypeMarvel.characters;
    //         case SearchType.COMICS:
    //             return TypeMarvel.comics;
    //         case SearchType.SERIES:
    //             return TypeMarvel.series;
    //         case SearchType.EVENTS:
    //             return TypeMarvel.events;
    //     }
    // };

    const typeLookup = {
        Heróis: TypeMarvel.characters,
        Quadrinhos: TypeMarvel.comics,
        Séries: TypeMarvel.series,
        Eventos: TypeMarvel.events,
    } as any;

    const isSelected = (type: string): TypeMarvel => typeLookup[type];

    const handleChangeFilter = (type: SearchType) => {
        setSelected(type);
        switch (type) {
            case SearchType.HEROES:
                setData(characters);
                // setFilteres(characters);
                break;
            case SearchType.COMICS:
                setData(comics);
                // setFilteres(comics);
                break;
            case SearchType.SERIES:
                setData(series);
                // setFilteres(series);
                break;
            case SearchType.EVENTS:
                setData(events);
                // setFilteres(events);
                break;
        }
    };

    const handleSearch = useDebounce((text: string) => {
        if (text === '') {
            setData(data);
            return;
        }
        const filteredElements = data.filter((element: { name: string; title: string }) => {
            const name = element.name || element.title;
            return name.toLowerCase().includes(text.toLowerCase());
        });
        setData(filteredElements);
    }, 500);

    return (
        <PageWrapper justifyContent="flex-start" edges={['top', 'left', 'right']} paddingTop={56}>
            <SearchInput onChangeText={text => handleSearch(text)} />

            <View
                width={'100%'}
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                px={'10px'}
                gap={'5px'}
                mt={'13px'}>
                {Object.values(SearchType).map(type => (
                    <Pressable
                        key={type}
                        // flex={1}
                        onPress={() => handleChangeFilter(type)}
                        alignItems="center"
                        borderRadius={'26px'}
                        px={'15px'}
                        backgroundColor={selected === type ? colors.primary[200] : 'transparent'}
                        borderColor={colors.primary[200]}
                        borderWidth={selected === type ? 0 : 1}
                        py={'9px'}>
                        <Text
                            fontSize={'12.5px'}
                            fontWeight={600}
                            lineHeight={'18.75px'}
                            color={selected === type ? colors.primary[500] : colors.primary[200]}>
                            {type}
                        </Text>
                    </Pressable>
                ))}
            </View>

            <SearchData TypeMarvel={isSelected(selected)} data={data} />
        </PageWrapper>
    );
}
