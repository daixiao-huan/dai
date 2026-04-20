import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import Practice from "@/pages/Practice";
import Quizzes from "@/pages/Quizzes";
import Progress from "@/pages/Progress";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
