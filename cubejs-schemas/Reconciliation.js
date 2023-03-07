// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Reconciliationreal features
// This is done purposely to decouple the Reconciliationreal stream to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 14: Reconciliation - contains a record of all the transactions made (purchases & campaigns) in BaseSMS

cube(`Reconciliation`, {
    extends: Reconciliationreal,
  });