import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import NewsLayout from '../layout/NewsLayout';
import Login from '../layout/Login';
import CategoryNews from '../Pages/CategoryNews';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: '',
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>
    },
    {
        path: '/auth',
        element: <Login></Login>
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
])

export default router;