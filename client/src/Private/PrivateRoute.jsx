// import { onAuthStateChanged } from 'firebase/auth';
// import React, { useState } from 'react'
// // import { useSelector } from 'react-redux'
// import { Outlet, useNavigate } from 'react-router-dom';
// import { auth } from '../config/firebase-config';

// const PrivateRoute = () => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState({});

//     onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });


//     const {currentUser} = user

//     console.log(currentUser, "currentUser");

//   return currentUser ? <Outlet /> : navigate("/login") 
// }

// export default PrivateRoute