import { useReactiveVar } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user, userState } from "../../GlobalState";
import axios from "axios";

const SignIn=()=> {

    const [userEmail, SetUserEmail] = useState<string>();
    const [userPassword, setUserPassword] = useState<string>();
    const [ error, setError] = useState<string>();
    const navigate = useNavigate();
    const user = useReactiveVar<user|undefined>(userState);

    const onLoginHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        axios
            .post(`http://localhost:5173/tripplanner/login`,{
                email: userEmail,
                password: userPassword
            })
            .then((res) =>{
                userState(res.data.user);
                navigate(`/trips`)
            })
            .catch((err)=>{
                setError("Your Email or Password is incorrect.");
            })
    }

    return (
        <div>
            
        </div>
    )
};

export default SignIn;