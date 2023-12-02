import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import "./App.css";
import SignUp from "./pages/sign-up/sign-up.page";
import SignIn from "./pages/sign-in/sign-in.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
