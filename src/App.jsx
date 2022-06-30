import Home from './page/home';
import "./index.css"
import { Routes, Route } from "solid-app-router"
export default function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<div>This site was made with Solid</div>} />
    </Routes>
    </div>
  );
}
