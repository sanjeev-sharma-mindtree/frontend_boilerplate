import { useEffect } from "react"
import {useParams} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {fetchCampaignDetails} from './campaignSlice'

export default function CampaignDetailsView() {
    const campaign = useAppSelector(state => state.campaign);
    const {campaignDetail} = campaign;
    const dispatch = useAppDispatch();
    const {campaignID} = useParams();

    useEffect(() => {
        dispatch(fetchCampaignDetails(campaignID));
    }, []);

    return (
        <>
            <h2>Campaign Details View</h2>
            {
                campaignDetail.loading && <div>Loading....</div>
            }
            {
                (!campaignDetail.loading && campaignDetail.error) && <div>{campaignDetail.error}</div>
            }
            {
                (!campaignDetail.loading && campaignDetail.data) && <>
                    <p>{campaignDetail.data.name}</p>
                    <p>{campaignDetail.data.email}</p>
                </>
            }
        </>
    ) 
    
}