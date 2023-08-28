import {makeVar} from "@apollo/client";

//placeholder until user model is made in Java
type user = {
    userId: String
}

export const userState = makeVar <user|undefined>(undefined);