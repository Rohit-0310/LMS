
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Components/DashBoard';
import Login from './Components/Login';

function App() {
    return (
        <div>
            {/* <DashBoard /> */}
            <Routes>
                <Route path={"/"} element={<DashBoard />}/>
                <Route path={"/Login"} element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
