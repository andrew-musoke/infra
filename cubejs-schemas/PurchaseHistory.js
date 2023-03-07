// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Purchasehistoryreal features
// This is done purposely to decouple the Purchasehistoryreal table to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 3: SMS Purchase History - containing a report on the purchases made 

cube(`PurchaseHistory`, {
    extends: Purchasehistoryreal,

    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  
      main: {
        dimensions: [PurchaseHistory.amountPaid, PurchaseHistory.customerid, PurchaseHistory.paymentStatus, PurchaseHistory.phoneNumber, PurchaseHistory.smsBought],
        timeDimension: PurchaseHistory.timestamp,
        granularity: `day`,
        indexes: {
          categoryIndex: {
           columns: [PurchaseHistory.amountPaid, PurchaseHistory.customerid, PurchaseHistory.paymentStatus, PurchaseHistory.phoneNumber, PurchaseHistory.smsBought] 
          }
        }
      }
  
    },

  });