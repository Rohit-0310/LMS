// import { useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
// import React from 'react'

// const LoadingRedirect = () => {
//     const [count, setCount] = useState(3);
    
//     const navigate = useNavigate();

//     useEffect(() => {
//       const intervel = setInterval(() => {
//         setCount((currentCount) => --currentCount)
//       }, 1000)
//       count === 0 && navigate("/login");
//       return () => clearInterval(intervel)
//     }, [count, navigate])

//   return (
//     <h2> Please Login...
//       Redirecting you to Login Page in {count} seconds</h2>
//   )
// }

// export default LoadingRedirect