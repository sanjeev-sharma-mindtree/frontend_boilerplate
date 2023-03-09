export type CampaignProps = {
  id?: number
  name: string
  email: string
}

export type CampaignAllProps = {
  campaignsList: {
    loading: boolean
    data: CampaignProps[]
    error: string
  }
  campaignDetail: {
    loading: boolean
    data: CampaignProps
    error: string
  }
}
