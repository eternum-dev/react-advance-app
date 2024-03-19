import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponent = () => {


    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobsType: ''
            }}
            onSubmit={(values) => { console.log(values) }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Este  campo no puede tener mas de 15 caracteres')
                        .required('Este campo es obligatorio'),
                    lastName: Yup.string()
                        .max(15, 'Este  campo no puede tener mas de 15 caracteres')
                        .required('Este campo es obligatorio'),
                    email: Yup.string()
                        .email('No tiene un formato valido')
                        .required('Este campo es requerido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe marcar la casiilla para aceptar los terminos'),
                    jobsType: Yup.string()
                                .notOneOf(['it-jr'], 'esta opcion no está habilitada')
                                .required('Debes seleccionar una opcion')
                })
            }>
            {
                () => (
                    <Form >
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name='firstName' component="span" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name='lastName' component="span" />

                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name='email' component="span" />

                        <label htmlFor='jobsType'>Job Type</label>
                        <Field name="jobsType" as="select">
                            <option value="">Pick Somethings</option>
                            <option value="developer">Developer</option>
                            <option value="disigner">Disigner</option>
                            <option value="it-senior">IT-Senior</option>
                            <option value="it-jr">IT-Jr</option>
                        </Field>
                        <ErrorMessage name='jobsType' component='span'/>

                        <label>
                            <Field name="terms" type="checkbox" />
                            Terms and conditions
                        </label>
                        <ErrorMessage name='terms' component="span" />

                        <button type='submit'>submit</button>
                    </Form>
                )
            }
        </Formik >
    )
}