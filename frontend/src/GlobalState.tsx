import {makeVar} from "@apollo/client";

    // placeholder until models made
    type user = {
        userId : String;
    }

export const userState = makeVar <user|undefined>(undefined);