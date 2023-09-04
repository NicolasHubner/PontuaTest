import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'native-base';
import { ScrollViewWrapper } from '@/components/View';
import { Header } from './Header';
import { TitleHome } from './Title';
import { api } from '@/service/api';
import { getCharacters, getComics, getEvents, getSeries } from '@/service/api/url';
import { CharactersFromApi } from '@/types/Characters';
import { Carrousel } from './Carrousel';
import { ComicsFromApi } from '@/types/Comics';
import { EventsFromApi } from '@/types/Events';
import { SeriesFromApi } from '@/types/Series';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CHARACTERS, SET_COMICS, SET_EVENTS, SET_SERIES } from '@/store/reducers/heroesSlice';
import { RootState } from '@/store/store';

export default function Home() {
    const disptach = useDispatch();

    const { characters, comics, events, series } = useSelector((state: RootState) => state.heroes);

    const [loading, setLoading] = useState(true);

    const getMarvelData = useCallback(async () => {
        try {
            const [charactersData, comicsData, eventsData, seriesData] = await Promise.all([
                api.get(getCharacters()) as Promise<CharactersFromApi>,
                api.get(getComics()) as Promise<ComicsFromApi>,
                api.get(getEvents()) as Promise<EventsFromApi>,
                api.get(getSeries()) as Promise<SeriesFromApi>,
            ]);

            disptach(SET_CHARACTERS(charactersData.data.data.results));

            disptach(SET_COMICS(comicsData.data.data.results));

            disptach(SET_EVENTS(eventsData.data.data.results));

            disptach(SET_SERIES(seriesData.data.data.results));
        } catch (err) {
            console.error('Erro para buscar dados da API da Marvel', err);
        } finally {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getMarvelData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ScrollViewWrapper edges={['top', 'left', 'right']} justifyContent="flex-start">
            <Header loading={loading} />

            <TitleHome />

            <Carrousel title="Heróis" data={characters} />

            <Carrousel title="Quadrinhos" data={comics} />

            <Carrousel title="Séries" data={series} />

            <Carrousel title="Eventos" data={events} />
        </ScrollViewWrapper>
    );
}
