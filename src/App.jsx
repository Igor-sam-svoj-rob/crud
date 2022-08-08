import "./App.css";
import UserList from "./components/UserList";
import { Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
