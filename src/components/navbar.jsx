import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Stack,
	Button,
	Menu,
	MenuItem,
} from "@mui/material";
import { useState } from "react";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const onClose = (event) => {
		setAnchorEl(null);
	};
	return (
		<AppBar position="static" color="primary">
			<Toolbar>
				<IconButton aria-label="logo" size="large" edge="start" color="inherit">
					<CurrencyBitcoinIcon></CurrencyBitcoinIcon>
				</IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					CryptoMary
				</Typography>
				<Stack direction="row" spacing={2}>
					<Button color="inherit" href="/">
						Home
					</Button>
					<Button
						color="inherit"
						id="currencies-button"
						onClick={handleClick}
						aria-controls={open ? "currencies-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						endIcon={<KeyboardArrowDownIcon />}
					>
						Currencies
					</Button>
					<Button color="inherit" href="/about">
						About
					</Button>
				</Stack>
				<Menu
					id="currencies-menu"
					anchorEl={anchorEl}
					open={open}
					MenuListProps={{
						"aria-labeledby": "currencies-button",
					}}
					onClose={onClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
				>
					<MenuItem component="a" href="/currencies">
						All Currencies
					</MenuItem>
					<MenuItem component="a" href="/watchlist">
						Watchlist Currencies
					</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
