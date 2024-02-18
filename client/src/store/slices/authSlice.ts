import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    user: User | null;
    token: string | null;
}

interface User {
}

const initialState: AuthState = {
    user: null,
    token: null,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout: (state) => {
            state.user = null,
                state.token = null
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload
            } else {
                console.error('user friends non-existent');

            }
        },
    }
})


export const { setLogin, setLogout, setFriends } = auth.actions