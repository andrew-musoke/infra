// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Totalcampaignsreal features
// This is done purposely to decouple the Totalcampaignsreal table to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 9: Total Campaigns - contains a total number of campaigns launched per customer

cube(`TotalCampaigns`, {
    extends: Totalcampaignsreal,
  });