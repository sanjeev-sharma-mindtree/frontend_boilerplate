import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

export const DRAWER_WIDTH = 240;

export const NAVIGATION_ITEMS = [
    {
        label: 'Dashboard',
        link: '/',
        icon: <HomeOutlinedIcon />,
        activeIcon: <HomeOutlinedIcon color='primary' />
    },
    {
        label: 'Campaigns',
        link: '/campaigns',
        icon: <FlagOutlinedIcon />,
        activeIcon: <FlagOutlinedIcon color='primary' />
    },
    {
        label: 'Incentives',
        link: '/incentives',
        icon: <CardGiftcardOutlinedIcon />,
        activeIcon: <CardGiftcardOutlinedIcon color='primary' />
    },
    {
        label: 'Offline Incentive Registration',
        link: 'offline-incentive-registration',
        icon: <SubscriptionsOutlinedIcon />,
        activeIcon: <SubscriptionsOutlinedIcon color='primary' />
    },
    {
        label: 'Consumer Support',
        link: 'consumer-support',
        icon: <SupportAgentOutlinedIcon />,
        activeIcon: <SupportAgentOutlinedIcon color='primary' />
    },
    {
        label: 'Preview Receipts',
        link: 'preview-receipts',
        icon: <ReceiptLongOutlinedIcon />,
        activeIcon: <ReceiptLongOutlinedIcon color='primary' />
    },
]