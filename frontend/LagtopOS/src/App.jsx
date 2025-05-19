import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import PowerButton from "./Components/PowerButton/PowerButton";
import LodingScreenBoot from "./Components/LodingScreen/LodingScreenBoot";
import PreLoginScreen from "./Components/PreLoginScreen/PreLoginScreen";
import LoginScreen from "./Components/PreLoginScreen/LoginScreen";
import HomePage from "./Components/Home/HomePage";
import Reboot from "./Components/PowerButton/PowerButtonTools/Reboot";
import Shutdown from "./Components/PowerButton/PowerButtonTools/ShutDown";
import Test from "./Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PowerButton />} />
        <Route path="/on" element={<LodingScreenBoot />} />
        <Route path="/preLogin" element={<PreLoginScreen />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/reboot" element={<Reboot/>}/>
        <Route path="/shutdown" element={<Shutdown/>}/>

        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
