import { Navigate, Route, Routes } from 'react-router-dom'

export default function HouseSales() {
    return (
        <Routes>
            <Route path="/" element={<HouseSales />}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
    )
}
