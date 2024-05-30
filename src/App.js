import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import CurrenciesPage from "./pages/CurrenciesPage";
import CurrencyDetailsPage from "./pages/CyrrencyDetailsPage";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

// const router = createBrowserRouter(createRoutesFromElements(<Route index />));

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Router>
				<>
					<Navbar />

					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/currencies" element={<CurrenciesPage />} />
						<Route path="/currencies/:id" element={<CurrencyDetailsPage />} />
						<Route path="/watchlist" element={<CurrenciesPage />} />
						<Route path="/about" element={<HomePage />} />
					</Routes>
				</>
			</Router>
		</ThemeProvider>
	);
}

export default App;
