import { Box } from "@mui/material";
import CurrenciesTable from "../components/CurrenciesTable";

function CurrenciesPage() {
	return (
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
	);
}

export default CurrenciesPage;
