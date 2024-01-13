import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayOut} from "./layouts/MainLayOut";
import {MainPage} from "./pages/MainPage";
import {TestPage} from "./pages/TestPage";
import {GradePage} from "./pages/GradePage";

const router = createBrowserRouter([
    {path: '', element: <MainLayOut/>, children:[
            {index:true, element: <Navigate to={'tests'}/>},
            {path: 'main', element: <MainPage/>},
            {path: 'tests', element: <TestPage/>, children:[
                    {path: ':grade', element: <GradePage/>}
                ]},
        ]}
])

export {router}