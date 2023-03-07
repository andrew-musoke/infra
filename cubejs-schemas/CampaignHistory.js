// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Campaignhistoryreal features
// This is done purposely to decouple the CampaignHistory table to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 2: SMS Campaign History - containing a detailed description and analytics of the campaign sent


cube(`CampaignHistory`, {
    extends: Campaigndetails,
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  
      main: {
        dimensions: [CampaignHistory.campaignid, CampaignHistory.campaignname, CampaignHistory.customerid, CampaignHistory.airtelNumbers, CampaignHistory.mtnNumbers, CampaignHistory.deliveryrate, CampaignHistory.message, CampaignHistory.numberofrecipients, CampaignHistory.recipient, CampaignHistory.recipients, CampaignHistory.status,CampaignHistory.totalFailedStatus, CampaignHistory.totalSuccessStatus],
        timeDimension: CampaignHistory.timestamp,
        granularity: `day`,
  
        indexes: {
          categoryIndex: {
           columns: [CampaignHistory.campaignid, CampaignHistory.campaignname, CampaignHistory.customerid, CampaignHistory.airtelNumbers, CampaignHistory.mtnNumbers, CampaignHistory.deliveryrate, CampaignHistory.message, CampaignHistory.numberofrecipients, CampaignHistory.recipient, CampaignHistory.recipients, CampaignHistory.status, CampaignHistory.totalFailedStatus, CampaignHistory.totalSuccessStatus] 
          }
      }
  
      }
  
    },


  });