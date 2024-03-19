import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
    const initalState = {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    }

    const { name, email, password, repeatPassword,
        onChange, resetForm, isValidEmail } = useForm(initalState)

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="juan pablo"
                    value={name}
                    name='name'
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>este campo es requerido</span>}

                <input
                    type="email"
                    placeholder="nombre.apellido@gmail.com"
                    value={email}
                    name='email'
                    onChange={onChange}
                />
                {!isValidEmail(email) && <span>este campo es requerido</span>}

                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    name='password'
                    onChange={onChange}
                />
                {password.trim().length <= 0 && <span>este campo es requerido</span>}
                {password.trim().length < 6 && password.trim().length > 0 && <span>este campo es requerido</span>}

                <input
                    type="password"
                    placeholder="repeat password"
                    value={repeatPassword}
                    name='repeatPassword'
                    onChange={onChange}
                />
                {repeatPassword.trim().length > 0 && password !== repeatPassword && <span>lñas contraseñas deben ser iguales </span>}

                <button type="submit">create</button>
                <button onClick={resetForm}>resetear formulario</button>
            </form>
        </div>
    )
}