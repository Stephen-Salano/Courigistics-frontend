import HomeIcon from '@/assets/images/icons/Home.svg'
import DeliveriesIcon from '@/assets/images/icons/Deliveries.svg'
import MessagesIcon from '@/assets/images/icons/Messages.svg'
import SettingsIcon from '@/assets/images/icons/Settings.svg'
import LogoutIcon from '@/assets/images/icons/Logout.svg'

export default [
  {
    title: 'Home',
    icon: HomeIcon,
    to: '/dashboard'
  },
  {
    title: 'Deliveries',
    icon: DeliveriesIcon,
    to: '/dashboard/deliveries'
  },
  {
    title: 'Messages',
    icon: MessagesIcon,
    to: '/dashboard/messages'
  },
  {
    header: 'Settings'
  },
  {
    title: 'Profile & Settings',
    icon: SettingsIcon,
    to: '/dashboard/settings'
  },
  {
    title: 'Logout',
    icon: LogoutIcon,
    action: 'logout'
  }
]