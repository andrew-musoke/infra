// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Totalpurchasereal features
// This is done purposely to decouple the Totalpurchasereal table to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 8: Total Purchase - contains details about total purchases per customers

cube(`TotalPurchase`, {
    extends: Totalpurchasereal,
  });