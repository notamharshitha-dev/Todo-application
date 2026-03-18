
import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Counter from './counter.jsx'
import Todo from './hooks/todolist.jsx'
import Timer from './stopwatch.jsx'
import Prodr from './productsRouter/products.jsx'
import Disp from './productsRouter/productsDis.jsx'
import { Provider } from 'react-redux'
import Store from './store/Store.js'
/*const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
        path:"/counter",
        element:<Counter/>
    },
    {
        path:"/todolist",
        element:<Todo/>
    },{
        path:"/stopwatch",
        element:<Timer/>
    },{
        path:"/products",
        element:<Prodr/>     
   },{
         path:"/productsDis/:id",
        element:<Disp/>
   }
    
        ]
    }
    
    
])*/
createRoot(document.getElementById('root')).render(

 <Provider store={Store} >
    <App></App>
 </Provider>
)
