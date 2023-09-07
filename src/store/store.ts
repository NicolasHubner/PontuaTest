import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profileSlice';
import heroesSlice from './reducers/heroesSlice';

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        heroes: heroesSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            imutableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Utilizei do redux para conseguir fazer a comunicação entre os componentes, armazenando os dados do usuário;
// Como pediram o mínimo 22 itens por página, utilizei o redux para armazenar os dados dos heróis;
