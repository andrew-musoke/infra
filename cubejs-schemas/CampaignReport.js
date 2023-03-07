// This schema uses the cubejs extends parameter to reuse all the Campaignreportreal feature
// This is done purposely to decouple the CampaignReport table to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 5: Campaign Report - contains information about the campaign (i.e. all the recipients, status, telco, etc) 

cube(`CampaignReport`, {
    extends: Campaignreportreal,
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  
      main: {
        dimensions: [CampaignReport.campaignid, CampaignReport.campaignname, CampaignReport.failureReason, CampaignReport.customerid, CampaignReport.recipient, CampaignReport.status, CampaignReport.telco, CampaignReport.totalrecipients, CampaignReport.timeSent],
        timeDimension: CampaignReport.campaignLaunchTime,
        granularity: `day`,
        indexes: {
          categoryIndex: {
           columns: [ CampaignReport.campaignid, CampaignReport.campaignname, CampaignReport.failureReason, CampaignReport.customerid, CampaignReport.recipient, CampaignReport.status, CampaignReport.telco, CampaignReport.totalrecipients, CampaignReport.timeSent] 
          }
        }
      }
  
    },
  });