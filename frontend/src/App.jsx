
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import { HomePage } from './pages/HomePage'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import Contact from './pages/Contact'
import About from './pages/About'
import Gallery from './pages/Gallery'
import DonationForm from './pages/DoantionForm'
import AdmissionForm from './pages/AdmissionForm'
import Navbar from './components/ui/Navbar'

function App() {
  //  Routing


  const router = createBrowserRouter(

    createRoutesFromElements(
      <>
        <Route index element={<HomePage />} />
        <Route path='/dashboard' element={<>
          <SignedIn>
            <DashboardPage />
          </SignedIn>
          <SignedOut>
            {<RedirectToSignIn />}
          </SignedOut>
        </>} />
        <Route path='/contact' element={<>

          <SignedIn>
            <Contact />
          </SignedIn>
          <SignedOut>
            {<RedirectToSignIn />}
          </SignedOut>



        </>} />

        <Route path='/about' element={<>

          <SignedIn>
            <About />
          </SignedIn>
          <SignedOut>
            {<RedirectToSignIn />}
          </SignedOut>



        </>} />
        <Route path='/gallery' element={<>

          <SignedIn>
            <Gallery />
          </SignedIn>
          <SignedOut>
            {<RedirectToSignIn />}
          </SignedOut>



        </>} />

        <Route path='/donation' element={<>

          <SignedIn>
            <DonationForm />
          </SignedIn>
          <SignedOut>
            {<RedirectToSignIn />}
          </SignedOut>



        </>} />

        <Route path='/admission' element={<>    <Navbar/>  <AdmissionForm />  </>} />
      </>
    )

  )


  return (
    <>

      <RouterProvider router={router} />

    </>

  )
}

export default App




