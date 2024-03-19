import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput, MySelect, MyCheckbox } from '../components/';

export const FormikAbstraction = () => {


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

                        <MyTextInput
                            label='First Name'
                            name='firstName'
                            placeholder='Alejandro' />

                        <MyTextInput
                            label='Last Name'
                            name='lastName'
                            placeholder='Thon' />

                        <MyTextInput
                            label='Email'
                            name='email'
                            placeholder='alejandro.thon.j@gmail.com'
                            type='email' />

                        <MySelect
                            label='jobsType'
                            name='jobsType'
                        >
                            <option value="">Pick Somethings</option>
                            <option value="developer">Developer</option>
                            <option value="disigner">Disigner</option>
                            <option value="it-senior">IT-Senior</option>
                            <option value="it-jr">IT-Jr</option>
                        </MySelect>

                        <MyCheckbox name="terms" label='Terms and conditions' />

                        <button type='submit'>submit</button>
                    </Form>
                )
            }
        </Formik >
    )
}