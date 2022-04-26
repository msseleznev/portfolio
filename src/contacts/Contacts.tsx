import React from 'react';
import {useFormik} from 'formik';
import s from './Contacts.module.scss'
import style from "../common/styles/Container.module.css";
import Title from "../common/components/titile/Title";
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField/TextField';
import {styled} from '@mui/material/styles/';


type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'rgb(255,255,255)',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#969696',
        },
        '&:hover fieldset': {
            borderColor: 'rgb(255,255,255)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgb(104, 154, 132)',
        },
    },
});


const Contacts = () => {


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = 'Required';
            } else if (values.name.length > 20) {
                errors.name = 'Must be 20 characters or less';
            }
            if (!values.message) {
                errors.message = 'Required';
            } else if (values.message.length > 2000) {
                errors.message = 'Must be 2000 characters or less';
            }
            return errors;
        },

        onSubmit: values => {
            emailjs.send('service_fvcygib', 'template_d4io23h', values, 'BYC0L6HDh7zMiKyYK')
                .then((result) => {
                    formik.resetForm()

                    alert('The message was sent')
                }, (error) => {
                    alert('Message send failed:' + error.text);
                    debugger
                });

        },
    });


    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={`${style.container} ${s.contactsContainer}`}>
                <Title title={'Contacts'} direction={'right'} dark/>
                <form onSubmit={formik.handleSubmit}>
                    <CssTextField className={s.mUIInput}
                                  InputLabelProps={{className: s.label}}
                                  id="custom-css-outlined-input"
                                  label="Name"
                                  margin="normal"
                                  {...formik.getFieldProps('name')}/>
                    {
                        formik.touched.name
                        && formik.errors.name
                        && <div style={{color: 'rgb(104, 154, 132)'}}>{formik.errors.name}</div>}

                    <CssTextField className={s.mUIInput}
                                  InputLabelProps={{className: s.label}}
                                  id="custom-css-outlined-input"
                                  label="Email"
                                  margin="normal"
                                  {...formik.getFieldProps('email')}/>
                    {
                        formik.touched.email
                        && formik.errors.email
                        && <div style={{color: 'rgb(104, 154, 132)'}}>{formik.errors.email}</div>}

                    <CssTextField className={s.mUITextarea}
                                  InputLabelProps={{className: s.label}}
                                  id="custom-css-outlined-input"
                                  multiline
                                  minRows={3}
                                  label="Message" margin="normal"
                                  {...formik.getFieldProps('message')}/>
                    {
                        formik.touched.message
                        && formik.errors.message
                        && <div style={{color: 'rgb(104, 154, 132)'}}>{formik.errors.message}</div>}
                    <div className={s.terms}>
                        <input className={s.button} type="submit" value="Send"/>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Contacts;
