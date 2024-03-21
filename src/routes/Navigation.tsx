import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
import logo from '../assets/react.svg'
import { RegisterPage } from '../forms/pages/RegisterPage';
import { FormikPage, FormikAbstraction, FormikComponent, FormikYupPage, RegisterFormikPage } from "../forms/pages";
import { DinamicForm } from "../forms/pages/DinamicForm";


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react logo" />
                    <ul>
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'nav-active' : ''}>home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/register' className={({ isActive }) => isActive ? 'nav-active' : ''}>Register-Page</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-basic' className={({ isActive }) => isActive ? 'nav-active' : ''}>formik</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-yup' className={({ isActive }) => isActive ? 'nav-active' : ''}>formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-component' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Component</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-abstraction' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstraction</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-register-page' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik RegisterPage</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dinamic-form' className={({ isActive }) => isActive ? 'nav-active' : ''}>Dinamic Form</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>



                <Routes>formik-yup
                    <Route
                        path="register"
                        element={<RegisterPage />}
                    />
                    <Route
                        path="formik-basic"
                        element={<FormikPage />}
                    />
                    <Route
                        path="formik-yup"
                        element={<FormikYupPage />}
                    />
                    <Route
                        path="formik-component"
                        element={<FormikComponent />}
                    />
                    <Route
                        path="formik-abstraction"
                        element={<FormikAbstraction />}
                    />
                    <Route
                        path="formik-register-page"
                        element={<RegisterFormikPage />}
                    />
                    <Route
                        path="dinamic-form"
                        element={<DinamicForm />}
                    />
                    <Route
                        path="about"
                        element={<h2>about page</h2>}
                    />
                    <Route
                        path="users"
                        element={<h2>users page</h2>}
                    />
                    <Route
                        path="/"
                        element={<h2>home page</h2>}
                    />


                    <Route
                        path="/*"
                        element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}