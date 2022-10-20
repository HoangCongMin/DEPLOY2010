import React from "react";
// import { useSelector } from "react-redux";
import Navbar from "./Navbar/Navbar";
// import Login from "./Page/Login";
import Napbaritemtwo from "./Napbaritemtwo/Napbaritemtwo";

function App() {
  // const loginsss = useSelector((state) => state.Login.token);

  const mb = [<Napbaritemtwo />, <Navbar />];

  function random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <div>
      
      
      {/* {!loginsss && <Login />}
      {loginsss && random(mb)} */}
      {random(mb)}
    </div>
  );
}

export default App;
