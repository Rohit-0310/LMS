
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin';
import DashBoard from './Components/DashBoard';
import Login from './Components/Login';
import Profile from './Components/Profile';
import SignUp from './Components/Signup';

function App() {
    return (
        <div>
            {/* <DashBoard /> */}
            <Routes>
                <Route path={"/"} element={<DashBoard />}/>
                <Route path={"/Login"} element={<Login />} />
                <Route path={"/Signup"} element={<SignUp />} />
                <Route path={"/Profile"} element={<Profile />} />
                <Route path={"/Admin"} element={<Admin />} />
            </Routes>
        </div>
    );
}

export default App;
