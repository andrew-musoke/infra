// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Basesmsauthreal features
// This is done purposely to decouple the Basesmsauthreal stream to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 4: Authorization Events - contains login and register events from the BaseSMS Application

cube(`Events`, {
    extends: Basesmsauthreal,
  });