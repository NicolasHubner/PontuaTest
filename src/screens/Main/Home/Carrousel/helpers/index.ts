import { Character } from '@/types/Characters';
import { ComicData } from '@/types/Comics';
import { MarvelEvent } from '@/types/Events';
import { ComicSeries } from '@/types/Series';

export const isTypeCarrousel = ({ item, title }: { item: any; title: string }) => {
    if (title === 'Heróis') {
        const character = item as Character;
        return {
            uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            name: character.name,
        };
    }

    if (title === 'Quadrinhos') {
        const comic = item as ComicData;
        return {
            uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
            name: comic.title,
        };
    }

    if (title === 'Séries') {
        const serie = item as ComicSeries;

        return {
            uri: `${serie.thumbnail.path}.${serie.thumbnail.extension}`,
            name: serie.title,
        };
    }

    if (title === 'Eventos') {
        const event = item as MarvelEvent;
        return {
            uri: `${event.thumbnail.path}.${event.thumbnail.extension}`,
            name: event.title,
        };
    }
};
