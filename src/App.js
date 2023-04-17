


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'


import Main from './Main';



import Dashboard from './Components/Dashboard';


import Products from './Components/Products';
import Users from './Components/Users';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        { path: 'dashboard', element: <Dashboard></Dashboard> },

        {
          path: 'users',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Users></Users>
        },
        { path: 'products', element: <Products></Products> }

      ]
    },










  ]);

  return (

    <div className='App'>




      <RouterProvider router={router}></RouterProvider>


    </div>
  )
}

export default App;
