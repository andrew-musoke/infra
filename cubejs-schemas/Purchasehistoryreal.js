// DESCRIPTION
// This schema used to model raw purchase-history data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT(s)
// Number 3: SMS Purchase History - containing a report on the purchases made
// Number 8: Total Purchase - contains details about total purchases per customers

cube(`Purchasehistoryreal`, {
  sql: ` SELECT CUSTOMERID,  PAYMENT_STATUS, AMOUNT_PAID, SMS_BOUGHT, PHONE_NUMBER, TIMESTAMP, COUNT(CUSTOMERID) AS COUNTCUSTOMERS
         FROM smsdomain.purchasehistoryreal
         GROUP BY CUSTOMERID,  PAYMENT_STATUS, AMOUNT_PAID, SMS_BOUGHT, PHONE_NUMBER, TIMESTAMP`,

  refreshKey: {
    every: `1 second`,
  },
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      //drillMembers: [customerid, timestamp]
    }
  },
  
  dimensions: {
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    },
    
    paymentStatus: {
      sql: `${CUBE}."PAYMENT_STATUS"`,
      type: `string`
    },

    amountPaid: {
      sql: `${CUBE}."AMOUNT_PAID"`,
      type: `number`
    },
    
    smsBought: {
      sql: `${CUBE}."SMS_BOUGHT"`,
      type: `number`
    },

    phoneNumber: {
      sql: `${CUBE}."PHONE_NUMBER"`,
      type: `string`
    },
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
