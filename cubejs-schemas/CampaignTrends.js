// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Campaigntrendsreal features
// This is done purposely to decouple the Campaigntrendsreal table to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 10: Campaign Trends - contains information about total campaigns sent & total sms sent per time

cube(`CampaignTrends`, {
    extends: Campaigntrendsreal,
  });