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
	const intervals = 30;
	// const [time, setTime] = useState(Date.now());
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Real-Time Prices History",
			},
		},
	};
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

	useEffect(() => {
		const fetchPrices = async () => {
			try {
				const response = await fetch(
					`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`,
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
				const history = res.prices.slice(-(intervals + 1));
				console.log(history);
				// setData(res.prices);
				setData({
					labels: history.map((el) => new Date(el[0]).toLocaleTimeString()),
					datasets: [
						{
							label: "Price (USD)",
							data: history.map((el) => el[1]),
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
	}, [id]);

	useEffect(() => {
		const fetchPrice = async () => {
			try {
				const response = await fetch(
					`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`,
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
				const newPrice = res.prices.pop();
				console.log(newPrice);
				if (
					newPrice !== data.datasets[0].data[data.datasets[0].data.length - 1]
				) {
					const newLabels = [...data.labels];
					const newData = [...data.datasets[0].data];
					newLabels.push(new Date().toLocaleTimeString());
					newLabels.shift();
					newData.push(newPrice[1]);
					newData.shift();
					setData({
						labels: newLabels,
						datasets: [
							{
								label: "Price (USD)",
								data: newData,
								borderColor: "rgb(255, 99, 132)",
								backgroundColor: "rgba(255, 99, 132, 0.5)",
							},
						],
					});
				}
			} catch (error) {
				console.error(error);
			}
		};

		const interval = setInterval(() => {
			fetchPrice();
		}, 10000); //* THIS DETERMINES THE PERIOD TO UPDATE
		// }, 300000);

		return () => clearInterval(interval);
	}, [id, data]);

	return (
		<Box sx={{ padding: "2rem" }}>
			{data && <Line options={options} data={data}></Line>}
		</Box>
	);
}

export default CurrencyChart;
