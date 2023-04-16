


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'


import Main from './Main';



import Dashboard from './Components/Dashboard';
import Buy from './Components/Buy';
import User from './Components/User';
import Products from './Components/Products';








const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Main></Main> },



    { path: 'dashboard', element: <Dashboard></Dashboard> },
    { path: 'buy', element: <Buy></Buy> },
    { path: 'user', element: <User></User> },

    { path: 'products', element: <Products></Products> }







  ]);

  return (

    <div className='App'>




      <RouterProvider router={router}></RouterProvider>


    </div>
  )
}

export default App;
