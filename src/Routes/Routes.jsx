import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import News from "../Layout/News";
import NewsDetail from "../Pages/News/News/NewsDetail";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/category/:id',
          element: <Category></Category>,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        }       
      ]
    },
    {
      path: '/news',
      element: <News></News>,
      children: [
        {
          path: ':id',
          element: <NewsDetail></NewsDetail>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);

  export default router