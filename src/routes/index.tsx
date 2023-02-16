import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  // Main Page
  { path: '/', element: <div>Main</div> },
  // Add a Job Form Page
  { path: 'add-job', element: <div>Post a Job</div> },
  // Company List Page
  { path: 'companies', element: <div>Companies</div> },
  // Individual Company Page
  { path: 'companies/:companyId', element: <div>Company</div> },
  // Create a 404 page
  { path: '*', element: <div>Not Found</div> },
])