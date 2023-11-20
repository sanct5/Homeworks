import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './LoginPage'
import { ProductsPage } from '../components/ProductsPage';

export const AppRoutes = () => {
    return (

        // <NavLink to="products/J" >Product by ID</NavLink>
            <Routes>
                <Route path="products">
                    <Route path=':id' element={<ProductsPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Route>
            </Routes>
    )
}