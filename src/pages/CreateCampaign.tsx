import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Box } from '@mui/system';
import CreateCampaignView from '../components/campaign/CreateCampaignView';

export default function CreateCampaign() {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h2>Create Campaigns</h2>
            <CreateCampaignView />
        </Box>
    )
}