
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Components/DashBoard';
import Login from './Components/Login';
import SignUp from './Components/Signup';

function App() {
    return (
        <div>
            {/* <DashBoard /> */}
            <Routes>
                <Route path={"/"} element={<DashBoard />}/>
                <Route path={"/Login"} element={<Login />} />
                <Route path={"/Signup"} element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
