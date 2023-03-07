// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Campaignglobalsearchreal features
// This is done purposely to decouple the CampaignGlobalSearch table to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 18. Global Search Feature - uses saved campaigns & campaign report to create a campaign global search feature on BaseSMS

cube(`CampaignGlobalSearch`, {
    extends: Campaignglobalsearchreal
  });