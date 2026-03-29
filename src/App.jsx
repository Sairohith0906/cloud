import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import HomePage from './pages/home';

function App() {
    return (
         <BrowserRouter>
            <Routes>
                <Route path='/login' element = {<Login />} />
                <Route path='/signup' element = {<Signup />} />
                <Route path='/' element = {<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
