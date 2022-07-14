
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin';
import CreateAssignment from './Components/CreateAssignment';
import CreateLecture from './Components/CreateLecture';
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
                <Route path={"/Admin/CreateLecture"} element={<CreateLecture />} />
                <Route path={"/Admin/CreateAssignment"} element={<CreateAssignment />} />
            </Routes>
        </div>
    );
}

export default App;
