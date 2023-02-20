import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

// import Home with react.lazy
const Home = React.lazy(() => import('./Home'))
const Companies = React.lazy(() => import('./Companies'))

export const router = createBrowserRouter([
  // Main Page
  { path: '/', element: <Home /> },
  // Add a Job Form Page
  { path: '/add-job', element: <div>Post a Job</div> },
  // Mission Page
  { path: '/mission', element: <div>Our Mission</div> },
  // Company List Page
  { path: '/companies', element: <Companies /> },
  // Individual Company Page
  { path: '/companies/:companyId', element: <div>Company</div> },
  // Create a 404 page
  { path: '*', element: <div>Not Found</div> },
])