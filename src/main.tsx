import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import "./styles/reset.css"
import "./styles/global.css"
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom'
import mainRouter from './routes'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={mainRouter}/>
        <ToastContainer
            position='top-center'
        />
    </StrictMode>,
)
