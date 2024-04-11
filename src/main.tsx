import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: (
      <>
      <div>
        <h1>Welcome to website</h1>
        <Link to="aboute">Aboute</Link> | <Link to="app">App</Link>
      </div>
      <Outlet></Outlet>
      </>
    ),
 
    children: [
      {path:"app",
      element:<App></App>
      },
      {
      path:"aboute",
      element:<About></About>
    },
  ],
},
])


ReactDOM.createRoot(document.getElementById('root')!).render(
<RouterProvider router={router}/>
)
