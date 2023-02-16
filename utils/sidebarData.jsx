import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded'
import SportsIcon from '@mui/icons-material/Sports'
import AbcIcon from '@mui/icons-material/Abc'

export const SidebarData = [
	{
		title: 'Casino',
		icon: <CasinoRoundedIcon />,
		link: '/casino',
		level: 1
	},
	{
		title: 'Sports',
		icon: <SportsIcon />,
		link: '/sports',
		level: 1
	},
	{
		title: 'Stake Originals',
		icon: <AbcIcon />,
		link: '/casino/stake-originals',
		level: 2
	},
]