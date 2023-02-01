import { createSlice, PayloadAction } from '@reduxjs/toolkit'


/**State definition. */
interface PlayerState {
    /**Names of the players. */
    names: string[];
    /**Defines whether the players order is randomized. */
    randomOrder: boolean;
    /**Defines whether the starting player is randomized. */
    randomStart: boolean;
};

const initialState: PlayerState = {
    names: [
        "Player1",
        "Player2"
    ],
    randomOrder: false,
    randomStart: true
};


export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        addPlayer: (state, action: PayloadAction<string>) => {
            // return [...state, action.payload];
            state.names = [...state.names, action.payload];
        },
        delPlayer: (state, action: PayloadAction<string>) => {
            // return state.filter((p) => p !== action.payload);
            state.names = state.names.filter((p) => p !== action.payload);
        },
        setRandomPlayerOrder: (state, action: PayloadAction<boolean | undefined>) => {
            state.randomOrder = action.payload ? action.payload : !state.randomOrder;
        },
        setRandomStartingPlayer: (state, action: PayloadAction<boolean | undefined>) => {
            state.randomStart = action.payload ? action.payload : !state.randomStart;
        }
    },
})

export const { addPlayer, delPlayer, setRandomPlayerOrder, setRandomStartingPlayer } = playersSlice.actions;