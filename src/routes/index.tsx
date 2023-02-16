import { createBrowserRouter } from 'react-router-dom'
import Button from '../components/atoms/Button'
import Home from './Home'

export const router = createBrowserRouter([
  // Main Page
  { path: '/', element: <Home /> },
  // Add a Job Form Page
  { path: 'add-job', element: <div>Post a Job</div> },
  // Company List Page
  { path: 'companies', element: <div>Companies</div> },
  // Individual Company Page
  { path: 'companies/:companyId', element: <div>Company</div> },
  // Create a 404 page
  { path: '*', element: <div>Not Found</div> },
])