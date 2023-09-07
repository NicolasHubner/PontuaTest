import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserRootState {
    isLogged?: boolean | undefined;
    name?: string | undefined;
    email?: string | undefined;
    token?: string | undefined;
}

const initialState: UserRootState = {
    isLogged: false,
    name: '',
    email: '',
    token: '',
};

const profileSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        SET_USER_INFO: (state: UserRootState, action: PayloadAction<Partial<UserRootState>>) => {
            const { payload } = action;
            const userInfo: UserRootState = payload;

            return {
                ...state,
                ...userInfo,
            };
        },
    },
});

export const { SET_USER_INFO } = profileSlice.actions;

export default profileSlice.reducer;
