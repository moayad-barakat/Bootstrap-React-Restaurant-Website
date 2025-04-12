import Home from "./website_pages/Home";
import Menu from "./website_pages/Menu";
import About from "./website_pages/About";
import Book from "./website_pages/Book";
import Navbar from "./website_pages/Navbar";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
function App() {
 return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Home" element={<Home/>} ></Route>
            <Route path="/Menu" element={<Menu/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Book" element={<Book/>}></Route>
        </Routes>
    </Router>
 )

  
}

export default App;
