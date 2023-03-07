// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the SavingcampaignDev features
// This is done purposely to decouple the SavingcampaignDev table to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 6: Saved Campaigns - contains details about a campaigns sent and number of recipients.

cube(`SavedCampaign`, {
    extends: Savingcampaignreal,

    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  
      main: {
        dimensions: [SavedCampaign.campaignid, SavedCampaign.campaignname, SavedCampaign.customerid, SavedCampaign.message, SavedCampaign.numberofrecipients, SavedCampaign.recipients],
        timeDimension: SavedCampaign.timestamp,
        granularity: `day`,
        indexes: {
          categoryIndex: {
           columns: [SavedCampaign.campaignid] 
          }
        }
      }
  
    },
  });
