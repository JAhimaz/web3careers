import { Suspense } from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "@routes"
import ThemeProvider from './App.Theme'
import Navigation from "@layout/Navigation"
import Spinner from "@components/atoms/Spinner"

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div css={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Spinner />
      </div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  )
}

export default App