import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LeazyPage1, LeazyPage2, LeazyPage3 } from "../pages";



export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout page</h1>

            <ul>
                <li>
                    <NavLink to="lazy1">lazy1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2">lazy2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3">lazy3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="lazy1" element={<LeazyPage1 />} />
                <Route path="lazy2" element={<LeazyPage2 />} />
                <Route path="lazy3" element={<LeazyPage3 />} />

                <Route path="*" element={<Navigate replace to="lazy1" />} />
            </Routes>
        </div>
    )
}

export default LazyLayout;