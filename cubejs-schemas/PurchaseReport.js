// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the PurchaseReport features
// This is done purposely to decouple the Purchasereportreal table to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 17: Purchase Report - uses purchase history data to generate purchase report on BaseSMS


cube(`PurchaseReport`, {
    extends: Purchasereportreal,  
  });