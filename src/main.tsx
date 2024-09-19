import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import "./styles/reset.css"
import "./styles/global.css"
import MainRoutes from './routes'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <MainRoutes/>
    </StrictMode>,
)
