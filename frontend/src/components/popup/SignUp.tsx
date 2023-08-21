import { userState } from "../../GlobalState";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Field, Form, Formik, FormikErrors, FormikHelpers, FormikProps } from "formik";

type newUserFormValues = {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        confirmedPassword: string
    }

type updatedNewUser = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

const emailVaild = (email: string) => {
    const isValid = email ? /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(email) : false;
    const isEmpty = email?.length === 0;

    return isValid && !isEmpty;
}

const SignUpPopUp =()=>{
    const navigate = useNavigate();

    const onSubmit = (values: newUserFormValues, { setErrors, setSubmitting }: FormikHelpers<newUserFormValues>) => {
        console.log(values);

        const updatedNewUser: updatedNewUser= {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
        }
        
        console.log("newInfo", updatedNewUser);

        axios
            .post(`http://localhost:8080/auth/register`, updatedNewUser)
            .then((res) => {
                userState(res.data);
                navigate(`/trips`)
                setSubmitting(false);
            })
            .catch((err) => {
                setErrors({
                    // TODO: get error from API call
                })
                setSubmitting(false);
            })
        return;
    }

        const validate = (values: newUserFormValues) => {
            let errors: FormikErrors<newUserFormValues> = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!emailVaild(values.email)) {
                errors.email = 'Invalid email address';
            }
            if(!values.password){
                errors.password = 'Required';
            }
            if(!values.confirmedPassword){
                errors.confirmedPassword = 'Required';
            } else if(values.password && values.password !== values.confirmedPassword) {
                errors.password = "Passwords don't match.";
            }
            return errors;
        }

    return (
        <div>
            <h1>SignUp</h1>
            <Formik 
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmedPassword: ""
                }}
                onSubmit={onSubmit}
                validate={validate}
            >
                {({errors, touched, isSubmitting}: FormikProps<newUserFormValues>)=>(
                <Form>

                    <label htmlFor="firstName">First Name</label>
                    <Field className='' name="firstName" id="firstName"/>
                    
                    <label htmlFor="lastName">Last Name</label>
                    <Field className='' name="lastName" id="lastName"/>

                    <label htmlFor="email">Email</label>
                    <Field className='' type="email" name="email" id="email"/>
                    {touched.email && errors.email && <div>{errors.email}</div>}

                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" />
                    {touched.password && errors.password && <div>{errors.password}</div>}

                    <label htmlFor="confirmedPassword">Confirm Password</label>
                    <Field type="password" name="confirmedPassword" />
                    {touched.confirmedPassword && errors.confirmedPassword && <div>{errors.confirmedPassword}</div>}

                    <button type="submit" disabled={isSubmitting} >Submit</button>
                </Form> 
                )}
            </Formik>
        </div>
    )
}

export default SignUpPopUp;