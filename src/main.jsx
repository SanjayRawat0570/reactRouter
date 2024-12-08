import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Github from './components/Github/Github.jsx'
import contact from './components/Contact/Contact.jsx'

// const router = createBrowserRouter([
//   {
//    path: '/',
//    element: <Layout/>,
//    children: [
//    {
//     path: "",
//     element: <Home />
//    },
//    {
//     path: "about",
//     element: <About />

//    },
//    {
//     path: "contact",
//     element: <contact />

//    }
//   ]
//   }
// ])
import User from './components/User/User.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<contact />}/>
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} />
      <Route
      loader={githubInfoLoader} 
      path='github'
      element={<Github />}
      />
    </Route>
  )
)







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)
// export default createBrowserRouter
