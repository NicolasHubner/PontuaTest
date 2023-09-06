import { useNavigation, useRoute } from '@react-navigation/native';
import { Character } from '@/types/Characters';
import { ComicData } from '@/types/Comics';
import { MarvelEvent } from '@/types/Events';
import { ComicSeries } from '@/types/Series';
import { ScrollViewWrapper } from '@/components/View';
import { isTypeMovieDetails } from '@/helpers/functions/isTypeMovieDetails';
import HeaderMovieDetails from './components/Headers';
import BackGround from './components/BackGround';
import { InfoTitle } from './components/InfoTitle';
import Series from './components/Series';
import Comics from './components/Comics';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

type DataTypeMapping = {
    characters: Character;
    comics: ComicData;
    series: ComicSeries;
    events: MarvelEvent;
};

interface IParams {
    data: DataTypeMapping[keyof DataTypeMapping];
    type: keyof DataTypeMapping;
}

export default function MovieDetails() {
    const { params } = useRoute();

    const [ref, setRef] = useState<ScrollView | null>(null);

    const { data, type } = params as IParams;

    const handleScrollToTop = useCallback((refs: ScrollView | null) => {
        refs?.scrollTo({ x: 0, y: 0, animated: true });
    }, []);

    useEffect(() => {
        handleScrollToTop(ref);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    return (
        <ScrollViewWrapper justifyContent="flex-start" paddingBottom={72} setRef={setRef}>
            <BackGround
                uri={isTypeMovieDetails({ item: data, condition: type })?.uri || ''}
                alt={isTypeMovieDetails({ item: data, condition: type })?.name || ''}
            />

            <HeaderMovieDetails />

            <InfoTitle
                title={isTypeMovieDetails({ item: data, condition: type })?.name || ''}
                histories={isTypeMovieDetails({ item: data, condition: type })?.historyTimes || 0}
                events={isTypeMovieDetails({ item: data, condition: type })?.eventsTimes || 0}
                series={isTypeMovieDetails({ item: data, condition: type })?.seriesTimes || 0}
                comics={isTypeMovieDetails({ item: data, condition: type })?.storiesTimes || 0}
                description={isTypeMovieDetails({ item: data, condition: type })?.description || ''}
            />

            {isTypeMovieDetails({ item: data, condition: type })?.series && (
                <Series
                    startYear={isTypeMovieDetails({ item: data, condition: type })?.startYear || ''}
                    endYear={isTypeMovieDetails({ item: data, condition: type })?.endYear || ' '}
                    dataSeries={isTypeMovieDetails({ item: data, condition: type })?.series}
                />
            )}

            {type !== 'comics' && <Comics id={data.id} type={type} />}
        </ScrollViewWrapper>
    );
}
