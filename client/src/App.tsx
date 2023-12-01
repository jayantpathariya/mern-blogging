import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="sign-in" element={<h1>Sign In</h1>} />
        <Route path="sign-up" element={<h1>Sign Up</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
