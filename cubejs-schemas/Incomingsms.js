// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Incomingsmsreal features
// This is done purposely to decouple the Incomingsmsreal stream to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 15: Incoming SMS - contains all the incoming messages from the end-users to the customer's account.

cube(`Incomingsms`, {
    extends: Incomingsmsreal,
  });