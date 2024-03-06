import {createBrowserRouter, RouterProvider, Outlet, Navigate} from 'react-router-dom'
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';


function Layout(){
  return(
    <div className='page-wrapper'>
      <GalleryNavigation galleries={harvardArt.records}/>
      <main>
        <Outlet />
      </main>
    </div>
  )
}


const router =  createBrowserRouter([
  {
  element:<Layout />,
  children:[
  {
    path: "*",
    element: <Navigate to = "/" replace ={true} />
  },
  {
    path: '/',
    element:<>
    <h2>Harvard Art Museum</h2>
    <p>
  Look, but Don&apos;t Touch. Please select a Gallery in the navigation bar.
    </p>
</>

  },
  {
    path: "/galleries/:galleryId",
    element: <GalleryView galleries = {harvardArt.records} />
  }
]
}
])


function App() {

  return (
  <>
  <h2> Hello from App </h2>
  <RouterProvider router = {router} />
</>
  )
}

export default App;
