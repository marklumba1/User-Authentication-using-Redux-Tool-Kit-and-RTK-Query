import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./styles/global/global.css"
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import UserPage from "./pages/UserPage";
const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
            errorElement: <PageNotFound/>
        },
        {
            path: "user/:id",
            element: <UserPage/>
        }
    ])
    return ( 
        <RouterProvider router={router}/>
     );
}
 
export default App;