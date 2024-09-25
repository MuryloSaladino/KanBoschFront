import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import "./styles/reset.css"
import "./styles/global.css"
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom'
import mainRouter from './routes'
import { ToastContainer } from 'react-toastify'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <RouterProvider router={mainRouter}/>
        </LocalizationProvider>
        <ToastContainer
            position='top-center'
        />
    </StrictMode>,
)
