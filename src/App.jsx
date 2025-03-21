import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import ProjectsPage from "./pages/ProjectsPage"
import ProjectDetailsPage from "./pages/ProjectDetailsPage"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<AppLayout />} >
            <Route index path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailsPage />} />

            <Route path='*' element={<NotFound />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
