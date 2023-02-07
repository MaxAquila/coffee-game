import { getRandomIntInclusive } from "@comm-helpers/mathHelper";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getRandomNickname = createAsyncThunk(`players/getRandomNickname`,
    async (name: string): Promise<[string, any]> => {        
        const response = await axios({
            method: "get", //default
            url: `https://api.guildwars2.com/v2/minis/${getRandomIntInclusive(1, 883)}`
            // url: `https://randommer.io/api/Name`,
            // headers: {
            //     "X-Api-Key": "adab1730e19f4365b9672dd744addb31" //not valid
            // }
        });
        return [name, response?.data?.name?.replace("Mini ", "")];
    }
);

export const playersAsyncThunks = {
    getRandomNickname
};