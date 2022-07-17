// import { onAuthStateChanged } from 'firebase/auth';
// import React, { useState } from 'react'
// // import { Route, Routes } from 'react-router-dom';
// // import { useSelector } from 'react-redux';
// import { auth } from '../config/firebase-config';
// import LoadingRedirect from './LoadingRedirect';

// const UserRoute = ({children, ...rest}) => {

//     const [user, setUser] = useState({});

//     onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });


//     const {currentUser} = user

//   return currentUser ? children : <LoadingRedirect />
// }

// export default UserRoute