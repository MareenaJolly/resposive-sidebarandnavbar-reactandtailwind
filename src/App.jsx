
import './App.css'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import { useState } from 'react'

function App() {
const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div className='flex'>
     <Sidebar sidebarToggle={sidebarToggle} />
     <Dashboard 
     sidebarToggle={sidebarToggle}
     setSidebarToggle={setSidebarToggle}/>
    </div>
  )
}

export default App
