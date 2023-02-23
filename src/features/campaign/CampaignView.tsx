import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCampaigns } from './campaignSlice';

export default function CampaignView() {
    //get campaign data from store using useAppSelector
    const campaign = useAppSelector(state => state.campaign)
    const {campaignsList} = campaign;
    const dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch action to fetch campaigns list when component is rendered
        dispatch(fetchCampaigns())
    }, [])

    return (
        <div>
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
        </div>
    )
}