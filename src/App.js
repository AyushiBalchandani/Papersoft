import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Admin/Home";
import UserHome from "./Components/Pages/Hierarchy/UserHome";
import UserDetails from "./Components/Pages/Hierarchy/UserDetails";
import UserLetter from "./Components/Pages/Hierarchy/UserLetter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<UserHome />} />
          <Route path="/letter" element={<UserLetter />} />
          <Route path="/details" element={<UserDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
