import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import logo from '../assets/react.svg'; 
import { LeazyPage1, LeazyPage2, LeazyPage3 } from "../lazyload/pages";



export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react logo" />
                    <ul>
                        <li>
                            <NavLink to='/lazy1' className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage 1</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy2' className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage 2</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy3' className={({ isActive }) => isActive ? 'nav-active' : ''}>LazyPage 3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="lazy1" element={<LeazyPage1 />} />
                    <Route path="lazy2" element={<LeazyPage2 />} />
                    <Route path="lazy3" element={<LeazyPage3 />} />


                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}