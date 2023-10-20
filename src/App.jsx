import { useState } from "react";
import "./reset.css";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Planet from "./pages/planet";
import Header from "./components/Header";
function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<BrowserRouter>
			<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:planet" element={<Planet menuOpen={menuOpen} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
