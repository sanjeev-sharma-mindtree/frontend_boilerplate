import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom'
import CampaignListView from '../components/campaign/CampaignListView';
import CampaignSummaryView from '../components/campaign/CampaignSummaryView';

export default function Campaign() {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h2>Campaigns</h2>
            <CampaignSummaryView />
            <CampaignListView />
        </Box>
    )
}