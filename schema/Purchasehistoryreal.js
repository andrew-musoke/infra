cube(`Purchasehistoryreal`, {
  sql: `SELECT * FROM smsdomain.purchasehistoryreal`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customerid, timestamp]
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
