import { FormikProps, Form, Field, withFormik, FormikErrors, Formik, FormikHelpers } from "formik";
import { userState } from '../../GlobalState';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


interface SignInFormValues {
    email: string
    password: string
}

const emailVaild = (email: string) => {
    const isValid = email ? /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(email) : false;
    const isEmpty = email?.length === 0;

    return isValid && !isEmpty;
}

const SignInPopUp = () => {
    const navigate = useNavigate();

    const onSubmit = (values: SignInFormValues, { setErrors, setSubmitting }: FormikHelpers<SignInFormValues>) => {

        console.log(values);
    
        axios
            .post(`http://localhost:8080/auth/authenticate`, values)
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

    const validate = (values: SignInFormValues) => {
        let errors: FormikErrors<SignInFormValues> = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!emailVaild(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }

    return (
        <div>
            <h1>SignIn</h1>
            <Formik 
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={onSubmit}
                validate={validate}
            >
                {({errors, touched, isSubmitting}: FormikProps<SignInFormValues>)=>(
                <Form>
                    
                    <label htmlFor="email">Email</label>
                    <Field className='' type="email" name="email" id="email"/>
                    {touched.email && errors.email && <div>{errors.email}</div>}

                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" />
                    {touched.password && errors.password && <div>{errors.password}</div>}

                    <button type="submit" disabled={isSubmitting} >Submit</button>
                </Form> 
                )}
            </Formik>
        </div>
    )
};

export default SignInPopUp;