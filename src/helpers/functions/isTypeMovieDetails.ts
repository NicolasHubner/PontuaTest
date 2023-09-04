import { Character } from '@/types/Characters';
import { ComicData } from '@/types/Comics';
import { MarvelEvent } from '@/types/Events';
import { ComicSeries } from '@/types/Series';

export enum TypeMarvel {
    characters = 'characters',
    comics = 'comics',
    series = 'series',
    events = 'events',
}

interface Marvel {
    uri: string;
    name: string;
    description: string;
    historyTimes: number;
    seriesTimes: number;
    storiesTimes: number;
    eventsTimes: number;
    startYear?: string | null;
    endYear?: string | null;
    series?: any;
}

export const isTypeMovieDetails = ({ item, condition }: { item: any; condition: string }) => {
    if (condition === TypeMarvel.characters) {
        const character = item as Character;
        return {
            uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            name: character.name,
            description: character.description,
            historyTimes: character.comics.available,
            seriesTimes: character.series.available,
            storiesTimes: character.stories.available,
            eventsTimes: character.events.available,
            startYear: null,
            endYear: null,
            series: character.series.items,
        } as Marvel;
    }

    if (condition === TypeMarvel.comics) {
        const comic = item as ComicData;
        return {
            uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
            name: comic.title,
            description: comic.description,
            historyTimes: comic.characters.available,
            seriesTimes: 0,
            storiesTimes: comic.stories.available,
            eventsTimes: comic.events.available,
            startYear: null,
            endYear: null,
            series: comic.stories.items,
        } as Marvel;
    }

    if (condition === TypeMarvel.series) {
        const serie = item as ComicSeries;

        return {
            uri: `${serie.thumbnail.path}.${serie.thumbnail.extension}`,
            name: serie.title,
            description: serie.description,
            historyTimes: serie.characters.available,
            seriesTimes: serie.creators.available,
            storiesTimes: serie.stories.available,
            eventsTimes: serie.events.available,
            startYear: serie.startYear.toString(),
            endYear: serie.endYear.toString(),
            series: serie.stories.items,
        } as Marvel;
    }

    if (condition === TypeMarvel.events) {
        const event = item as MarvelEvent;
        return {
            uri: `${event.thumbnail.path}.${event.thumbnail.extension}`,
            name: event.title,
            description: event.description,
            historyTimes: event.characters.available,
            seriesTimes: event.creators.available,
            storiesTimes: event.stories.available,
            eventsTimes: 0,
            startYear: event.start,
            endYear: event.end,
            series: event.series.items,
        } as Marvel;
    }
};
