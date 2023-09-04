import { Character } from '@/types/Characters';
import { ComicData } from '@/types/Comics';
import { MarvelEvent } from '@/types/Events';
import { ComicSeries } from '@/types/Series';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface HeroRootState {
    characters: Character[];
    comics: ComicData[];
    events: MarvelEvent[];
    series: ComicSeries[];
}

const initialState: HeroRootState = {
    characters: [],
    comics: [],
    events: [],
    series: [],
};

const heroesSlice = createSlice({
    name: 'heroes',
    initialState: initialState,
    reducers: {
        SET_CHARACTERS: (state: HeroRootState, action: PayloadAction<Character[]>) => {
            const { payload } = action;
            const characters: Character[] = payload;

            return {
                ...state,
                characters,
            };
        },
        SET_COMICS: (state: HeroRootState, action: PayloadAction<ComicData[]>) => {
            const { payload } = action;
            const comics: ComicData[] = payload;

            return {
                ...state,
                comics,
            };
        },
        SET_EVENTS: (state: HeroRootState, action: PayloadAction<MarvelEvent[]>) => {
            const { payload } = action;
            const events: MarvelEvent[] = payload;

            return {
                ...state,
                events,
            };
        },
        SET_SERIES: (state: HeroRootState, action: PayloadAction<ComicSeries[]>) => {
            const { payload } = action;
            const series: ComicSeries[] = payload;

            return {
                ...state,
                series,
            };
        },
    },
});

export const { SET_CHARACTERS, SET_COMICS, SET_EVENTS, SET_SERIES } = heroesSlice.actions;

export default heroesSlice.reducer;
