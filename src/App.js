import {
	Box,
	Paper,
	Table,
	TableContainer,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Avatar,
	Link,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import CurrenciesTable from "./components/CurrenciesTable";

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
				</Box>
			</>
		</ThemeProvider>
	);
}

export default App;
