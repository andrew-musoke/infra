// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Smsbalancereal features
// This is done purposely to decouple the Smsbalancereal table to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 1: SMS balance in client’s wallets

cube(`Smsbalance`, {
    extends: Smsbalancereal,

    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  
      main: {
        dimensions: [Smsbalance.balance, Smsbalance.customerid],
        timeDimension: Smsbalance.timestamp,
        granularity: `day`,
        indexes: {
          categoryIndex: {
           columns: [Smsbalance.balance, Smsbalance.customerid] 
          }
        }
      }
  
    },
  });