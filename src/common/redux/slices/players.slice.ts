import { Player } from 'common/models/player';
import { playersAsyncThunks } from '@comm-redux/asyncThunks/players.thunk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


/**State definition. */
interface PlayerState {
    /**Names of the players. */
    names: string[];
    /**Names of the players. */
    list: Player[];
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
    list: [
        { name: "Player1", nickname: "Striker" },
        { name: "Player2", nickname: "Jumbo" }
    ],
    randomOrder: false,
    randomStart: true
};


export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        addPlayer: (state: PlayerState, action: PayloadAction<string>) => {
            // return [...state, action.payload];
            state.names = [...state.names, action.payload];
            state.list = [...state.list, { name: action.payload, nickname: action.payload }];
        },
        delPlayer: (state: PlayerState, action: PayloadAction<string>) => {
            // return state.filter((p) => p !== action.payload);
            state.names = state.names.filter((p) => p !== action.payload);
            state.list = state.list.filter((p) => p.name !== action.payload);
        },
        setRandomPlayerOrder: (state: PlayerState, action: PayloadAction<boolean | undefined>) => {
            state.randomOrder = action.payload ? action.payload : !state.randomOrder;
        },
        setRandomStartingPlayer: (state: PlayerState, action: PayloadAction<boolean | undefined>) => {
            state.randomStart = action.payload ? action.payload : !state.randomStart;
        }
    },
    extraReducers: (builder) => {
        //getRandomNickname
        builder.addCase(playersAsyncThunks.getRandomNickname.pending, (state: PlayerState, action) => {
            console.log(action);
        });
        builder.addCase(playersAsyncThunks.getRandomNickname.fulfilled, (state: PlayerState, action: PayloadAction<[name: string, nickname: string]>) => {
            // console.log("name", action.payload[0]);
            // console.log("nick", action.payload[1]);
            // const player = state.list.find(p => p.name === action.payload[0]);
            // if (player) player.nickname = action.payload[1];
            state.names = [...state.names, action.payload[0]];
            state.list = [...state.list, { name: action.payload[0], nickname: action.payload[1] }];
        });
        builder.addCase(playersAsyncThunks.getRandomNickname.rejected, (state: PlayerState, { error, meta }) => {
            console.error(error, meta);
        });
    }
})

export const { addPlayer, delPlayer, setRandomPlayerOrder, setRandomStartingPlayer } = playersSlice.actions;