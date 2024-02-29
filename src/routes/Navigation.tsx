import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
import logo from '../assets/react.svg'
import { ShoppingPage } from "../component-patters/pages/ShoppingPage"



export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react logo" />
                    <ul>
                        <li>
                            <NavLink to='/shopping' className={({ isActive }) => isActive ? 'nav-active' : ''}>shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="shopping" element={<ShoppingPage />} />
                    <Route path="about" element={<h2>about page</h2>} />
                    <Route path="users" element={<h2>users page</h2>} />
                    <Route path="/" element={<h2>home page</h2>} />


                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}