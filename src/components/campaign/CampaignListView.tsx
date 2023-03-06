import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCampaigns } from '../../features/campaign/campaignSlice';

export default function CampaignListView() {
    //get campaign data from store using useAppSelector
    const campaign = useAppSelector(state => state.campaign)
    const {campaignsList} = campaign;
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        // dispatch action to fetch campaigns list when component is rendered
        dispatch(fetchCampaigns())
    }, [])

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {/* <Button onClick={navigate('/create-campaign')}>Create Campaign</Button> */}
            <h2>List of Campaigns</h2>
            {
                campaignsList.loading && <div>Loading....</div>
            }
            {
                (!campaignsList.loading && campaignsList.error) && <div>{campaignsList.error}</div>
            }
            {
                (!campaignsList.loading && campaignsList.data.length) && <ul>
                    {
                        campaignsList.data.map(camp => {
                            return (
                                <Link key={camp.id} to={`/campaign/${camp.id}`}>
                                    <li>{camp.name}</li>
                                </Link>
                            )
                        })
                    }   
                </ul>
            }
        </Box>
    )
}