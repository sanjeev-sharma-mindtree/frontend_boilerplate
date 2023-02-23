import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import {CampaignProps, CampaignAllProps} from './Campaign.types'
import axiosInstance from '../../utils/axios'

const initialState: CampaignAllProps = {
    campaignsList: {
        loading: false,
        data: [],
        error: ''
    },
    campaignDetail: {
        loading: false,
        data: {
            name: '',
            email: ''
        },
        error: ''
    }
}

export const fetchCampaigns = createAsyncThunk('campaigns-list', () => {
    return axiosInstance.get('/users')
    .then((response) => response.data)
})

export const fetchCampaignDetails = createAsyncThunk('campaign-detail', async(campaignID: string | undefined) => {
    return axiosInstance.get(`/users/${campaignID}`)
    .then((response) => response.data)
})

const campaignSlice = createSlice({
    name: 'campaign',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCampaigns.pending, state => {
            state.campaignsList.loading = true
        })
        builder.addCase(fetchCampaigns.fulfilled, (state, action: PayloadAction<CampaignProps[]>) => {
            state.campaignsList.loading = false
            state.campaignsList.data = action.payload
            state.campaignsList.error = ''
        })
        builder.addCase(fetchCampaigns.rejected, (state, action) => {
            state.campaignsList.loading = false
            state.campaignsList.data = []
            state.campaignsList.error = action.error.message || 'Something went wrong'
        })
        builder.addCase(fetchCampaignDetails.pending, state => {
            state.campaignDetail.loading = true
        })
        builder.addCase(fetchCampaignDetails.fulfilled, (state, action: PayloadAction<CampaignProps>) => {
            state.campaignDetail.loading = false
            state.campaignDetail.data = action.payload
        })
        builder.addCase(fetchCampaignDetails.rejected, (state, action) => {
            state.campaignDetail.loading = false
            state.campaignDetail.error = action.error.message || 'Something went wrong'
        })
    }
})

// export const {fetchCampaignsList} = campaignSlice.actions
export default campaignSlice.reducer