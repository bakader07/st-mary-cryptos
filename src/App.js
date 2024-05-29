import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import CurrenciesTable from "./components/CurrenciesTable";
import CurrencyChart from "./components/CurrencyChart";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<>
				<Navbar />

				<Box sx={{ padding: "2rem" }}>
					<Box
						sx={{
							color: "primary.main",
						}}
					>
						<h1>Currencies</h1>
					</Box>

					<CurrenciesTable />

					<Box
						sx={{
							color: "primary.main",
						}}
					>
						<h2>Currency Chart</h2>
					</Box>
					<CurrencyChart />
				</Box>
			</>
		</ThemeProvider>
	);
}

export default App;
