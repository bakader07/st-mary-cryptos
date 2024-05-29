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
import InfoIcon from "@mui/icons-material/Info";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CheckBox } from "@mui/icons-material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Navbar from "./components/navbar";

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
					<TableContainer component={Paper}>
						<Table stickyHeader aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Logo</TableCell>
									<TableCell>Name</TableCell>
									<TableCell>Symbol</TableCell>
									<TableCell>Current Price</TableCell>
									<TableCell align="center">Price Change (Last 24H)</TableCell>
									<TableCell align="center">Watchlist</TableCell>
									<TableCell align="center">More Details</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{currencies.map((currency) => (
									<TableRow
										href="/here"
										key={currency.id}
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
										<TableCell>{currency.symbol}</TableCell>
										<TableCell>{currency.current_price} USD</TableCell>
										<TableCell align="center">
											{currency.price_change_percentage_24h}%
										</TableCell>
										<TableCell align="center">
											<CheckBox
											// icon={<BookmarkBorderIcon />}
											// checkedIcon={<BookmarkIcon />}
											// onChange={() => {}}
											/>
										</TableCell>
										<TableCell align="center">
											<Link href="/chart">
												<InfoIcon></InfoIcon>
											</Link>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</>
		</ThemeProvider>
	);
}

const currencies = [
	{
		id: "bitcoin",
		symbol: "btc",
		name: "Bitcoin",
		image:
			"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
		current_price: 68356,
		market_cap: 1346915839214,
		market_cap_rank: 1,
		fully_diluted_valuation: 1435456869582,
		total_volume: 30095907822,
		high_24h: 69466,
		low_24h: 67201,
		price_change_24h: -994.6280304697575,
		price_change_percentage_24h: -1.4342,
		market_cap_change_24h: -19562870461.82251,
		market_cap_change_percentage_24h: -1.43163,
		circulating_supply: 19704690,
		total_supply: 21000000,
		max_supply: 21000000,
		ath: 73738,
		ath_change_percentage: -7.29997,
		ath_date: "2024-03-14T07:10:36.635Z",
		atl: 67.81,
		atl_change_percentage: 100705.33414,
		atl_date: "2013-07-06T00:00:00.000Z",
		roi: null,
		last_updated: "2024-05-28T23:24:42.424Z",
	},
	{
		id: "ethereum",
		symbol: "eth",
		name: "Ethereum",
		image:
			"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
		current_price: 3848.46,
		market_cap: 462601901149,
		market_cap_rank: 2,
		fully_diluted_valuation: 462601901149,
		total_volume: 17863132794,
		high_24h: 3927.72,
		low_24h: 3774.69,
		price_change_24h: -33.41939888312254,
		price_change_percentage_24h: -0.86091,
		market_cap_change_24h: -4128833031.444336,
		market_cap_change_percentage_24h: -0.88463,
		circulating_supply: 120137632.127615,
		total_supply: 120137632.127615,
		max_supply: null,
		ath: 4878.26,
		ath_change_percentage: -21.06609,
		ath_date: "2021-11-10T14:24:19.604Z",
		atl: 0.432979,
		atl_change_percentage: 889227.89439,
		atl_date: "2015-10-20T00:00:00.000Z",
		roi: {
			times: 74.27484416477635,
			currency: "btc",
			percentage: 7427.484416477636,
		},
		last_updated: "2024-05-28T23:24:49.796Z",
	},
	{
		id: "tether",
		symbol: "usdt",
		name: "Tether",
		image:
			"https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
		current_price: 0.999029,
		market_cap: 111819590374,
		market_cap_rank: 3,
		fully_diluted_valuation: 111819590374,
		total_volume: 52167828976,
		high_24h: 1.001,
		low_24h: 0.993144,
		price_change_24h: 0.00010953,
		price_change_percentage_24h: 0.01097,
		market_cap_change_24h: -7172661.792877197,
		market_cap_change_percentage_24h: -0.00641,
		circulating_supply: 111965329380.761,
		total_supply: 111965329380.761,
		max_supply: null,
		ath: 1.32,
		ath_change_percentage: -24.51803,
		ath_date: "2018-07-24T00:00:00.000Z",
		atl: 0.572521,
		atl_change_percentage: 74.43873,
		atl_date: "2015-03-02T00:00:00.000Z",
		roi: null,
		last_updated: "2024-05-28T23:20:44.466Z",
	},
	{
		id: "binancecoin",
		symbol: "bnb",
		name: "BNB",
		image:
			"https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
		current_price: 601.24,
		market_cap: 92527142413,
		market_cap_rank: 4,
		fully_diluted_valuation: 92527142413,
		total_volume: 962798568,
		high_24h: 606.11,
		low_24h: 593.55,
		price_change_24h: -1.9596613902684794,
		price_change_percentage_24h: -0.32488,
		market_cap_change_24h: -177180224.504364,
		market_cap_change_percentage_24h: -0.19112,
		circulating_supply: 153856150,
		total_supply: 153856150,
		max_supply: 200000000,
		ath: 686.31,
		ath_change_percentage: -12.37337,
		ath_date: "2021-05-10T07:24:17.097Z",
		atl: 0.0398177,
		atl_change_percentage: 1510251.91136,
		atl_date: "2017-10-19T00:00:00.000Z",
		roi: null,
		last_updated: "2024-05-28T23:24:56.381Z",
	},
];

export default App;
