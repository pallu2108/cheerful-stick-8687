import { Route, Routes } from "react-router-dom";
import Cashmere from "./Cashmere";
import Home from "./Home";
import HomePage from "./HomePage";
import Kids from "./Kids";
import Men from "./Men";
import New from "./New";
import NewArrivals from "./NewArrivals";
import Sale from "./Sale";
import SignIn from "./SignIn";
import Stories from "./Stories";
import Swim from "./Swim";
import Women from "./Women";

function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/new" element={<New/>}></Route>
                <Route path="/women" element={<Women/>}></Route>
                <Route path="/men" element={<Men/>}></Route>
                <Route path="/kids" element={<Kids/>}></Route>
                <Route path="/swim" element={<Swim/>}></Route>
                <Route path="/cashmere" element={<Cashmere/>}></Route>
                <Route path="/home" element={<HomePage/>}></Route>
                <Route path="/stories" element={<Stories/>}></Route>
                <Route path="/sale" element={<Sale/>}></Route>
                <Route path="/signin" element={<SignIn/>}></Route>
                <Route path="/newarrivals" element={<NewArrivals/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;