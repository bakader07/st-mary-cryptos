import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Paper,
	Table,
	TableContainer,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Avatar,
} from "@mui/material";
import { getStorageValue } from "../useLocalStorage";

function CurrenciesTable() {
	const navigate = useNavigate();
	const watchlist = getStorageValue("watchlist", []);
	const [currencies, setCurrencies] = useState([]);
	const [vscurrency, setVsCurrency] = useState("usd");

	useEffect(() => {
		const fetchCurrencies = async () => {
			try {
				const response = await fetch(
					`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vscurrency}`,
					{
						method: "GET",
						headers: {
							accept: "application/json",
							"x-cg-demo-api-key": "CG-f4toFwbsfaHqahWfdLBhNNLL",
						},
					}
				);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const data = await response.json();
				console.log(data);
				setCurrencies(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchCurrencies();
	}, [vscurrency]);

	return (
		<TableContainer component={Paper}>
			<Table stickyHeader aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Logo</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Symbol</TableCell>
						<TableCell>Current Price</TableCell>
						<TableCell align="center">Price Change (Last 24H)</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{currencies
						.filter((currency) => watchlist.includes(currency.id))
						.map((currency) => (
							<TableRow
								key={currency.id}
								onClick={() => {
									navigate(`/currencies/${currency.id}`);
								}}
								sx={{
									"&:hover": {
										backgroundColor: "primary.dark",
									},
									"&:last-child td, &:last-child th": { border: 0 },
								}}
							>
								<TableCell>
									<Avatar src={currency.image} />
								</TableCell>
								<TableCell>{currency.name}</TableCell>
								<TableCell>{currency.symbol.toUpperCase()}</TableCell>
								<TableCell>{currency.current_price} USD</TableCell>
								<TableCell align="center">
									{`${currency.price_change_percentage_24h > 0 ? "+" : ""}${
										currency.price_change_percentage_24h
									}`}
									%
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default CurrenciesTable;
