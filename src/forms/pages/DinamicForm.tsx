/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form } from 'formik';
import formJSOM from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';


const initialValues: { [key: string]: any } = {};
const requiredField: { [key: string]: any } = {};

for (const input of formJSOM) {
    initialValues[input.name] = input.value

    if (!input.validations) continue;
    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('El campo es requerido');
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value , `El minimo es de: ${(rule as any).value } caracteres`);
        }
        if (rule.type === 'email') {
            schema = schema.email('El email debe tener un formato valido');
        }
    }
    requiredField[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredField })

export const DinamicForm = () => {
    return (
        <div>
            <h1>Dinamic Formik</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(value) => { console.log(value) }}
            >
                {
                    () => (
                        <Form>
                            {
                                formJSOM.map(({ label, name, placeholder, type, options }) => {
                                    if (type === 'input' || type === 'password' || type === 'email') {

                                        return (
                                            <MyTextInput
                                                key={name}
                                                name={name}
                                                label={label}
                                                type={(type)}
                                                placeholder={placeholder}
                                            />
                                        )
                                    } else if (type === 'select') {

                                        return (
                                            <MySelect
                                                label={label}
                                                name={name}
                                                key={name}
                                            >
                                                <option value="">Debe selecccionar una opcion</option>
                                                {
                                                    options?.map(({ id, label }) => (
                                                        <option value={label} key={id}>{label}</option>
                                                    ))
                                                }
                                            </MySelect>
                                        )
                                    }
                                    throw new Error(`el type: ${type} No es soportado`)
                                })
                            }
                            <button type='submit'>enviar</button>

                        </Form>
                    )
                }

            </Formik>
        </div>

    )
}