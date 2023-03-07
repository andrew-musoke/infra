// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Campaignhistoryreportreal features
// This is done purposely to decouple the CampaignHistoryReport table to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 5: Campaign Report - contains information about the campaign (i.e. all the recipients, status, telco, etc) 
// Number 16: Campaign History Report - uses campaign report schemas to generate reports on BaseSMS

cube(`CampaignHistoryReport`, {
    extends: Campaignhistoryreportreal,  
  });
  