import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikPage = () => {

    const validate = (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if (!values.firstName) {
            errors.firstName = 'Requerid'
        } else if (values.firstName.length >= 10) {
            errors.firstName = 'Must be 10 character or less'
        }

        if (!values.lastName) {
            errors.lastName = 'Requerid'
        } else if (values.lastName.length >= 10) {
            errors.lastName = 'Must be 10 character or less'
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }


        return errors;
    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (value) => {
            console.log(value)
        },
        validate
    })

    return (
        <div>
            <h1>Formik tutorial</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name='firstName'
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.firstName && errors.firstName && <span> {errors.firstName} </span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name='lastName'
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.lastName && errors.lastName && <span> {errors.lastName} </span>}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && <span> {errors.email} </span>}

                <button type='submit'>submit</button>
            </form>
        </div>
    )
}