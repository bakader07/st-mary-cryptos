import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import CurrencyChart from "../components/CurrencyChart";

function CurrencyDetailsPage() {
	const { id } = useParams();
	return (
		<Box sx={{ padding: "2rem" }}>
			<Box
				sx={{
					color: "primary.main",
				}}
			>
				<h1>Currency Chart</h1>
			</Box>

			<CurrencyChart coinId={id} />
		</Box>
	);
}

export default CurrencyDetailsPage;
