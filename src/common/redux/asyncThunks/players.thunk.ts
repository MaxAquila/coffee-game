import { getRandomIntInclusive } from "@comm-helpers/mathHelper";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getRandomNickname = createAsyncThunk(`players/getRandomNickname`,
    async (name: string): Promise<[string, any]> => {
        try {
            const response = await axios({
                method: "get", //default
                url: `https://api.guildwars2.com/v2/minis/${getRandomIntInclusive(1, 883)}`,
                timeout: 10000
                // url: `https://randommer.io/api/Name`,
                // headers: {
                //     "X-Api-Key": "adab1730e19f4365b9672dd744addb31" //not valid
                // }
            });
            return [name, response?.data?.name?.replace("Mini ", "")];
        } catch (e) {
            throw e;
        }
    }
);

export const playersAsyncThunks = {
    getRandomNickname
};