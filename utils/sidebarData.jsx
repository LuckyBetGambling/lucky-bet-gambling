import ShareIcon from '@mui/icons-material/Share'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded'
import SportsIcon from '@mui/icons-material/Sports'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'


export const SidebarData = [
	{
		title: 'Casino',
		icon: <CasinoRoundedIcon />,
		link: '/casino',
		categories: [
			{
				title: 'New Releases',
				icon: <CasinoRoundedIcon />,
				link: '/casino/group/new_releases'
			},
			{
				title: 'Card Games',
				icon: <CasinoRoundedIcon />,
				link: '/casino/group/card_games'
			},
			{
				title: 'Casual Games',
				icon: <CasinoRoundedIcon />,
				link: '/casino/group/casual_games'
			},
			{
				title: 'Craps',
				icon: <CasinoRoundedIcon />,
				link: '/casino/group/craps'
			},
			{
				title: 'Lottery',
				icon: <CasinoRoundedIcon />,
				link: '/casino/group/lottery'
			},
			{
				title: 'Poker',
				icon: <CasinoRoundedIcon />,
				link: '/casino/group/poker'
			},
			{
				title: 'Slots',
				icon: <CasinoRoundedIcon />,
				link: '/casino/group/slots'
			},
			{
				title: 'Video Poker',
				icon: <CasinoRoundedIcon />,
				link: '/casino/group/video_poker'
			},
		]
	},
	
	// sports section
	{
		title: 'Sports',
		icon: <SportsIcon />,
		link: '/sports',
		categories: [
			{
				title: 'Football',
				icon: <SportsIcon />,
				link: '/sports/group/Football'
			},
			{
				title: 'Basketball',
				icon: <SportsIcon />,
				link: '/sports/group/Basketball'
			},
			{
				title: 'UFC',
				icon: <SportsIcon />,
				link: '/sports/group/UFC'
			},
			{
				title: 'Ice Hockey',
				icon: <SportsIcon />,
				link: '/sports/group/Ice Hockey'
			},
			{
				title: 'Table Tennis',
				icon: <SportsIcon />,
				link: '/sports/group/Table Tennis'
			}
		]
	},
	// sports categories
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
