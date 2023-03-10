import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Erroe404 from './pages/erroe404';

import EditTask from './pages/EditTask/EditTask'
 
import Profile from "./pages/Profile";
// LEVEL2
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Signin from './pages/Signin/Singin';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Erroe404 />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },


  {
    path: "/signup",
    element: <Signup />,
  },



  {
    path: "/about",
    element: <About />,
  },

 
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/EditTask",
    element: <EditTask />,
  },
]);

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
