import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mensagem from './components/Mensagem'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mensagem dia ={true}/> <br/>
    <Mensagem dia ={false}/>
  </StrictMode>,
)
