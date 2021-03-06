import React from "react";
import style from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


export const Contacts2 = () => {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values: any) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'must be more than 3 characters ';
            }

            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <FormControl>
                        <FormLabel>
                            <p>To log in get registered
                                <a href={'https://social-network.samuraijs.com/'}
                                   target={'_blank'}> here
                                </a>
                            </p>
                            <p>or use common test account credentials:</p>
                            <p>Email: free@samuraijs.com</p>
                            <p>Password: free</p>
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                label="Email"
                                margin="normal"
                                {...formik.getFieldProps('email')}/>
                            {formik.touched.email
                            && formik.errors.email ?
                                <div style={{color: "red"}}>{formik.errors.email}</div> : null}
                            <TextField
                                type="password"
                                label="Password"
                                margin="normal"
                                {...formik.getFieldProps("password")}
                            />
                            {formik.touched.email
                            && formik.errors.password ?
                                <div style={{color: "red"}}>{formik.errors.password}</div> : null}
                            <FormControlLabel
                                label={'Remember me'} control={<Checkbox
                                checked={formik.values.rememberMe}
                                {...formik.getFieldProps("rememberMe")}
                            />}/>
                            <Button
                                type={'submit'} variant={'contained'} color={'primary'}>
                                Login
                            </Button>
                        </FormGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </form>
    )
}


const Contacts = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
            message: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input
                        placeholder="Enter Your email"
                        {...formik.getFieldProps('email')}
                    />
                    <input
                        placeholder="Enter Your phone"
                        {...formik.getFieldProps('phone')}
                    />
                    <textarea
                        placeholder="Enter Your message"
                        {...formik.getFieldProps('message')}/>

                </form>

                <button>Send</button>

            </div>


        </div>
        </form>
    )
}

export default Contacts