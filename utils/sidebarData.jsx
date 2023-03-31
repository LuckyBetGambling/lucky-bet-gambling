import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import SettingsIcon from '@mui/icons-material/Settings'
import ShareIcon from '@mui/icons-material/Share'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded'
import SportsIcon from '@mui/icons-material/Sports'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'


export const SidebarData = [
	{
		title: 'Casino',
		icon: <CasinoRoundedIcon />,
		link: '/casino/'
	},
	// casino categories
	{
		title: 'Stake Originals',
		icon: <SportsIcon />,
		link: 'casino/group/stake-originals'
	},
	{
		title: 'Stake Exclusives',
		icon: <SportsIcon />,
		link: 'casino/group/stake-exclusives'
	},
	{
		title: 'Slots',
		icon: <SportsIcon />,
		link: 'casino/group/slots'
	},
	{
		title: 'Live Casino',
		icon: <SportsIcon />,
		link: 'casino/group/live-casino'
	},
	{
		title: 'Blackjack',
		icon: <SportsIcon />,
		link: 'casino/group/blackjack'
	},
	{
		title: 'Roulette',
		icon: <SportsIcon />,
		link: 'casino/group/roulette'
	},
	// sports section
	{
		title: 'Sports',
		icon: <SportsIcon />,
		link: '/sports'
	},
	// sports categories
	{
		title: 'Soccer',
		icon: <SportsIcon />,
		link: '/soccer'
	},
	{
		title: 'Tennis',
		icon: <SportsIcon />,
		link: '/tennis'
	},
	{
		title: 'Basketball',
		icon: <SportsIcon />,
		link: '/basketball'
	},
	{
		title: 'Ice Hockey',
		icon: <SportsIcon />,
		link: '/ice-hockey'
	},
	{
		title: 'Table Tennis',
		icon: <SportsIcon />,
		link: '/table-tennis'
	},
	// finished sports section
	{
		title: 'Promotions',
		icon: <ShareIcon />,
		link: '/promotions'
	},
	{
		title: 'Sponsorships',
		icon: <ContactSupportIcon />,
		link: '/sponsorships'
	},
	{
		title: 'Live Support',
		icon: <LiveHelpIcon />,
		link: '/live-support'
	}
]
