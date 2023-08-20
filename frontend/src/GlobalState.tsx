import {makeVar} from "@apollo/client";

// placeholder until models made
export type user = {
    userId : string,
    firstName: string,
    lastName: string,
    email: string,
}

export const userState = makeVar <user|undefined>(undefined);