import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "../auth/pages/LoginPage";
import { useAuthStore } from "../hooks/useAuthStore";
import HouseSale from '../house-sale/pages/HouseSale';

export const AppRouter = ()=>{
    const { status, checkAuthToken } = useAuthStore();
    useEffect(() => {
        checkAuthToken();
    }, [])
    if (status === 'checking') {
        return (
            <h3>Cargando...</h3>
        )
    }
    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path='/auth/*' element={<LoginPage />} />
                            <Route path="/*" element={<Navigate to="auth/login" />}></Route>
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={<HouseSale />}></Route>
                            <Route path="/*" element={<Navigate to="/" />}></Route>
                        </>
                    )
            }
        </Routes>
    )
}