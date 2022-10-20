// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Flogin } from "../Action/LoginuserAction";
// import style from "../Page/Login.module.css";
// import clsx from "clsx";
// import { LOG_IN_REQUEST } from "../Constant/Constant";
// import * as React from "react";


// function Login() {
//   const dispatch = useDispatch();

//   const [taikhoan, Settaikhoan] = useState("");
//   const [matkhau, Setmatkhau] = useState("");

//   const handle = () => {
//     // const action=Flogin(loginset)]
//     dispatch({
//       type: LOG_IN_REQUEST,
//       payload: { email: taikhoan, password: matkhau },
//     });
//   };
//   return (
    
      
//         <>
//         <div className={clsx(style.fromlogin)} >
//           <div className={clsx(style.fromloginone)}>
//             <h1>Login to ?</h1>
          
//           <input
//           className={clsx(style.fromloginone12)}
//           type="text"
//           value={taikhoan}
//           onChange={(e) => Settaikhoan(e.target.value)}
          
//         /> 
          
           
          
//           <input
//           type="password"
//           value={matkhau}
//           onChange={(e) => Setmatkhau(e.target.value)}
//           className={clsx(style.fromloginone12)}
//         />
         
         
//           <button className={clsx(style.fromloginone1)}  onClick={handle}>
//             Login
//           </button>

//           <p>Not a member?<a href="">Sign up now</a> </p>
//           </div>
//           </div>
//        </>  
//   );
// }

// export default Login;
