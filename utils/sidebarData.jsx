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
				title: 'Stake Originals',
				icon: <SportsIcon />,
				link: '/casino/group/Stake Originals'
			},
			{
				title: 'Slots',
				icon: <SportsIcon />,
				link: '/casino/group/Slots'
			},
			{
				title: 'Live Casino',
				icon: <SportsIcon />,
				link: '/casino/group/Live Casino'
			},
			{
				title: 'Table Games',
				icon: <SportsIcon />,
				link: '/casino/group/Table Games'
			},
			{
				title: 'New Releases',
				icon: <SportsIcon />,
				link: '/casino/group/New Releases'
			}
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
