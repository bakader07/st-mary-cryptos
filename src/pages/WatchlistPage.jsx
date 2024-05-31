import { Box } from "@mui/material";
import WatchlistCurrenciesTable from "../components/WatchlistCurrenciesTable";

function WatchlistPage() {
	return (
		<Box sx={{ padding: "2rem" }}>
			<Box
				sx={{
					color: "primary.main",
				}}
			>
				<h1>Watch List</h1>
			</Box>

			<WatchlistCurrenciesTable />
		</Box>
	);
}

export default WatchlistPage;
