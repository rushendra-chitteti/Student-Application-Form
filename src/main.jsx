// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './StudentApplicationForm.css'
import './StudentsDataForm.css'
// import App from './App.jsx'
import StudentDetails from './StudentApplicationForm'
// import StudentsData from './StudentsDataForm'

createRoot(document.getElementById('root')).render(
  
  <StudentDetails />,
    // <StudentsData />
)
