// import { NavLink } from "react-router-dom";
// import "./Auth.css";
// import { useContext } from "react";
// import { LogIn, LogOut } from "../../";
// import { AppContext } from "../../App";



// export default function Auth() {
//   const { user } = useContext(AppContext);
//   return (
//     <div className="Auth">
//       {user ? (
//         <span>
//           <div className="img-container">
//             <img
//               onClick={logOut}
//               src={
//                 user?.photoURL
//               }
//               alt="Placeholder"
//             />
//           </div>
//         </span>
//       ) : (
//         <span className="LogOut-img">
//           <div className="img-container">
//             <NavLink to="/orders">
//               <img
//                 onClick={logIn}
//                 src={
//                   user?.photoURL ||
//                   "https://i.pinimg.com/474x/00/54/72/0054722b7d5a096223ebaf2620ee2440.jpg"
//                 }
//                 alt="Placeholder"
//               />
//             </NavLink>
//           </div>
//         </span>
//       )}
//     </div>
//   );
// }
import "./Auth.css";
import { useContext } from "react";
// import { LogIn, LogOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { logIn as LogIn, logOut as LogOut } from '../../firebase';

// import { logIn, logOut } from '../../firebase'; 


export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button className="blueBtn" onClick={LogIn}>Sign in</button> : null}
      {user ? <span><Link to="/orders">{user.displayName}</Link></span> : null}
      {user ? <button className="icon"><Link to="/orders"><i class="fa-solid fa-user" /></Link></button> : null}
      {user ? <button className="blueBtn" onClick={LogOut}>Sign out</button> : null}
    </div>
  );
}