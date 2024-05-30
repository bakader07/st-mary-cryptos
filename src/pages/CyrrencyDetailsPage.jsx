import { useParams } from "react-router-dom";
import { Box, Avatar } from "@mui/material";
import CurrencyChart from "../components/CurrencyChart";
import { useState, useEffect } from "react";

function CoinData(props) {
	const coin = props.data;
	return (
		<>
			<Box
				sx={{ color: "primary.main", display: "flex", alignItems: "center" }}
			>
				<Avatar sx={{ marginRight: "1em" }} src={coin.image.large} />
				<h1>
					{coin.name} ({coin.symbol.toUpperCase()})
				</h1>
			</Box>
			<p>{coin.description.en}</p>
		</>
	);
}

function CurrencyDetailsPage() {
	const { id } = useParams();
	const [coin, setCoin] = useState(null);

	useEffect(() => {
		const fetchCurrencies = async () => {
			try {
				const response = await fetch(
					`https://api.coingecko.com/api/v3/coins/${id}`,
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
				setCoin(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchCurrencies();
	}, []);

	return (
		<Box sx={{ padding: "2rem" }}>
			<Box>
				{coin && <CoinData data={coin} />}

				<h2>Currency Price Hisory Chart</h2>
			</Box>

			<CurrencyChart coinId={id} />
		</Box>
	);
}

export default CurrencyDetailsPage;
