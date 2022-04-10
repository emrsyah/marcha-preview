import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotificationModal from "./components/NotificationModal";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/modal" element={<NotificationModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
