import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';
import * as Yup from 'yup';
import '../styles/styles.css';


export const RegisterFormikPage = () => {
    const initalState = {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    }

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={initalState}
                onSubmit={(value) => { console.log(value) }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .required('Este campo es requerido')
                            .max(15, 'Este campo no puede contener mas de 15 caracteres')
                            .min(2, 'Tu nombre debe tener almenos dos letras'),

                        email: Yup.string()
                            .required('Este campo es requerido')
                            .email('El campo imail no tiene un formato correcto'),

                        password: Yup.string()
                            .required('Este campo es requerido')
                            .min(6, 'Este campo al menos necesita  6 caracteres'),

                        repeatPassword: Yup.string()
                            .required('Este campo es requerido')
                            .oneOf([Yup.ref('password')], 'La contraseña no coincide '),
                    })
                }
            >
                {
                    <Form>
                        <MyTextInput
                            label='Name'
                            name='name'
                            placeholder='Gabriel' />

                        <MyTextInput
                            label='Email'
                            name='email'
                            type='email'
                            placeholder='alejandro.thon@gmail.com' />

                        <MyTextInput
                            label='Contraseña'
                            name='password' />

                        <MyTextInput
                            label='Repite tu Contraseña'
                            name='repeatPassword' />

                        <button type='submit'>Enviar Formulario</button>

                        <button type='reset'>Reset Formulario</button>

                    </Form>
                }
            </Formik>
        </div>
    )
}