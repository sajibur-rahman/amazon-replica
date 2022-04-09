import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <nav>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "goldenrod" } : { color: "black" }
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "goldenrod" } : { color: "black" }
          }
          to="/products"
        >
          products
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "goldenrod" } : { color: "black" }
          }
          to="/dashboard"
        >
          dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "goldenrod" } : { color: "black" }
          }
          to="/orders"
        >
          orders
        </NavLink>
        {user?.displayName && <span>{user.displayName}</span>}
        {user ? (
          <button onClick={() => signOut(auth)}>sign out</button>
        ) : (
          <NavLink style={({isActive}) => isActive ? {color:'goldenrod'} :{color:'black'} } to="/login">login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
