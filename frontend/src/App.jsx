import User from "./getUsers/User";
import AddUser from "./addUsers/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateUser from "./updateUser/UpdateUser";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
