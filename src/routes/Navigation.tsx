import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import logo from '../assets/react.svg';
import { routes } from './routes';
import { Suspense } from "react";




export const Navigation = () => {


    return (
        <Suspense fallback={setTimeout(() => {
            <h2>loading..</h2>
        }, 300)}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="react logo" />
                        <ul>
                            {
                                routes.map(({ name, to }) => {
                                    return (
                                        <li key={name}>
                                            <NavLink
                                                to={to}
                                                className={({ isActive }) => isActive ? 'nav-active' : ''}
                                            >{name}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ Component, path, name }) => {
                                return (
                                    <Route
                                        key={name}
                                        path={path}
                                        element={<Component />}
                                    />
                                )
                            })
                        }
                        <Route path="/*" element={<Navigate to="/home" replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>

    )
}



{/*    <li>
                            <NavLink to='/lazy1' className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage 1</NavLink> 
                            <NavLink to={lazyPage1.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{la}</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy2' className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage 2</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy3' className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage 3</NavLink>
                        </li>*/}