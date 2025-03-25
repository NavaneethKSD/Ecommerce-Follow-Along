// import LoginPage from './components/LoginPage'

// function App() {

//   return (
//     <>
//       <LoginPage/>
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/HomePage";
import MyProductsPage from "./components/MyProductsPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/my-products" element={<MyProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;