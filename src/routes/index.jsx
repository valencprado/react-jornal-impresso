import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Login from '../pages/login';

export default function AppRoutes(){
    return(
        <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
        )
}