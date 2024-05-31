import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

function CurrencyChart(props) {
	const id = props.coinId;
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Last 30 Days Prices History",
			},
		},
	};
	const [period, setPeriod] = useState(30);
	// const [time, setTime] = useState(Date.now());
	const [data, setData] = useState({
		// labels: prices.map((el, index) => `${period - index} days ago`),
		labels: [],
		datasets: [
			{
				label: "Price (USD)",
				// data: prices.map((el) => el[1]),
				data: [],
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	});

	// useEffect(() => {
	// 	const interval = setInterval(() => setTime(Date.now()), 1000);
	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, []);

	useEffect(() => {
		const fetchPrices = async () => {
			try {
				const response = await fetch(
					`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${period}&interval=daily`,
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

				const res = await response.json();
				console.log(res);
				console.log(res.prices);
				// setData(res.prices);
				setData({
					labels: res.prices.map((el, index) =>
						period - index > 0 ? `${period - index} days ago` : "Today"
					),
					datasets: [
						{
							label: "Price (USD)",
							data: res.prices.map((el) => el[1]),
							borderColor: "rgb(255, 99, 132)",
							backgroundColor: "rgba(255, 99, 132, 0.5)",
						},
					],
				});
			} catch (error) {
				console.error(error);
			}
		};
		fetchPrices();
	}, [id, period]);
	// useEffect(() => {
	// 	fetch(
	// 		"https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily",
	// 		{
	// 			method: "GET",
	// 			headers: {
	// 				accept: "application/json",
	// 				"x-cg-demo-api-key": "CG-f4toFwbsfaHqahWfdLBhNNLL",
	// 			},
	// 		}
	// 	)
	// 		.then((response) => response.json())
	// 		.then((results) => {
	// 			console.log(results);
	// 			console.log(results["prices"]);
	// 			// setData(results["prices"]);
	// 		})
	// 		.catch((err) => console.error(err));
	// }, []);

	return (
		<Box sx={{ padding: "2rem" }}>
			{data && <Line options={options} data={data}></Line>}
		</Box>
	);
}

// const prices = [
// 	[1716422400000, 69181.20085677762],
// 	[1716508800000, 67906.46534276106],
// 	[1716595200000, 68539.91646552991],
// 	[1716681600000, 69268.44558973772],
// 	[1716768000000, 68508.83110875699],
// 	[1716854400000, 69367.23871755725],
// 	[1716940800000, 68316.63588049631],
// 	[1716996193000, 67706.88328432705],
// ];

export default CurrencyChart;
