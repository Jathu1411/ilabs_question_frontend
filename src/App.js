import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListQuestions from "./pages/ListQuestions";
import ViewQuestion from "./pages/ViewQuestion";
import AddQuestion from "./pages/AddQuestion";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListQuestions />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/question/:id" element={<ViewQuestion />} />
        <Route path="/add" element={<AddQuestion />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
