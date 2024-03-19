import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik(
        {
            initialValues: {
                firstName: '',
                lastName: '',
                email: '',
            },
            onSubmit: (value) => {
                console.log(value)
            },
            validationSchema: Yup.object({
                firstName: Yup.string()
                    .max(15, 'Este  campo no puede tener mas de 15 caracteres')
                    .required('Este campo es obligatorio'),
                lastName: Yup.string()
                    .max(15, 'Este  campo no puede tener mas de 15 caracteres')
                    .required('Este campo es obligatorio'),
                email: Yup.string()
                    .email('No tiene un formato valido')
                    .required('Este campo es requerido')
            })
        });


    return (
        <div>
            <h1>Formik Yup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                    {...getFieldProps('firstName')}
                />
                {touched.firstName && errors.firstName && <span> {errors.firstName} </span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text"
                    {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName && <span> {errors.lastName} </span>}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    {...getFieldProps('email')}
                />
                {touched.email && errors.email && <span> {errors.email} </span>}

                <button type='submit'>submit</button>
            </form>
        </div>
    )
}