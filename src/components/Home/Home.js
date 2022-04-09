import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1>
        current user is{" "}
        <span style={{ color: "blue", textTransform: "uppercase" }}>
          {user ? user.displayName : "no user login"}
        </span>{" "}
      </h1>
    </div>
  );
};

export default Home;
