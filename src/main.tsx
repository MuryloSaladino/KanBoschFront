import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import "./styles/reset.css"
import "./styles/global.css"
import { RouterProvider } from 'react-router-dom'
import mainRouter from './routes'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={mainRouter}/>
    </StrictMode>,
)
