import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import NotFound from "../views/NotFound";
import {getCookie} from "./helpers";

const RouterPages =()=>{
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Dashboard />}/>
                <Route path='/*' element={<NotFound />}/>
            </Routes>
        </Router>
    )
}

export default RouterPages
