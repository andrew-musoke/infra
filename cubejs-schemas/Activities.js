// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Activitiesreal features
// This is done purposely to decouple the Activitiesreal stream to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 13: Activities - contains the timeline activities (e.g. authorization notifications, purchases, campaign sent, etc.)

cube(`Activities`, {
    extends: Activitiesreal,
  });