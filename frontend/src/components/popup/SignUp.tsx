import { useReactiveVar } from "@apollo/client";
import { useState, useMemo } from "react";
import { user, userState } from "../../GlobalState";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type newUser = {
        firstName?: string,
        lastName?: string,
        email?: string,
        password?: string,
    }

type userFormError = {
    email : boolean,
    body : String
}


const SignUp = () => {
    const [error, setError] = useState<userFormError>({});
    const user = useReactiveVar<user|undefined>(userState);
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");
    const [newUser, setNewUser] = useState<newUser>({});
    const navigate = useNavigate();

    const passwordMatch = (confirmedPassword : string, newUser: newUser ) => {
        if(!confirmedPassword || !newUser.password){
            return true;
        }
        else if( confirmedPassword = newUser.password){
            return true;
        }
        return false;
    };

    const emailVaild = useMemo(()=>{
        const isValid = newUser && newUser.email ? /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(newUser.email) : false;
        const isEmpty = newUser?.email?.length === 0;

        return {
            isValid,
            isEmpty
        };
    }, [newUser?.email])

    const newUserSubmitHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault;
        const passwordsMatch = passwordMatch(confirmedPassword, newUser)
        if(!emailVaild.isValid || emailVaild.isEmpty || !passwordsMatch){
            setError({
                email : true,
                body: "Your email is invalid or passwords do not match."
            
            })
            return;
        }

        axios
            .post(`http://localhost:5173/tripplanner/signup`)
            .then((res) => {
                userState(res.data);
                navigate(`/trips`)
            })
            .catch((err) => {
                setError({
                    email: true,
                    // TODO: replace with error given from API once known
                    body: "There was an issue with submitting."
                })
            })
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newUserForm : newUser = {...newUser};
        const fieldName: "firstName" | "lastName" | "email" | "password" = e.target.name as "firstName" | "lastName" | "email" | "password"
        newUserForm[fieldName] = e.target.value;
    }

    return (
        <div>
            
        </div>
    )
}