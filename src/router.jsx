import { createHashRouter } from "react-router";
import FrontedLayout from "./layoyt/FrontedLayout";
import Home from "./views/front/Home";
import Products from "./views/front/Products";
import Cart from "./views/front/Cart";
import Checkout from "./views/front/Checkout";
import Login from "./views/Login";

import SingleProduct from "./views/front/SingleProduct";
import NotFound from "./views/front/Notfound";


export const router = createHashRouter ([
    {
        path:'/',
        element:<FrontedLayout />,
        children:[{
            index:true,
            element:<Home />
        },
        {
            path:'product',
            element:<Products />
        },
        {
            path:'product/:id',
            element:<SingleProduct />
        },
        {
            path:'cart',
            element:<Cart />
        },
        {
            path:'checkout',
            element:<Checkout />
        },
        {
            path:'login',
            element:<Login />
        }
    ]
    },{
        path:'*',
        element:<NotFound />
    }
])