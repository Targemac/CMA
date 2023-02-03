import "./App.css";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Partials/Header";
import NotFound from "./Components/Auth/NotFound";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Profile/Settings";
import AddContact from "./Components/Contact/AddContact";
import EditContact from './Components/Contact/EditContact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/settings" element={<Settings />} />

          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/contact/edit" element={<EditContact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
