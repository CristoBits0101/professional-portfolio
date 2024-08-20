import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Projects from "../pages/Projects";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </main>
    )
}
