import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import SettingsIcon from '@mui/icons-material/Settings'
import ShareIcon from '@mui/icons-material/Share'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

export const adminSidebarData = [
	{
		title: 'Manage Team',
		icon: <AdminPanelSettingsIcon />,
		link: '/admin/permissions'
	},
	{
		title: 'Website Settings',
		icon: <SettingsIcon />,
		link: '/admin/settings'
	},
	{
		title: 'Content Management',
		icon: <ShareIcon />,
		link: '/admin/content'
	},
	{
		title: 'Contact Admin',
		icon: <ContactSupportIcon />,
		link: '/admin/contact'
	}
]
