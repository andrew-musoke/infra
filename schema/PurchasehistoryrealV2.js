cube(`PurchasehistoryrealV2`, {
  sql: `SELECT * FROM test."purchasehistoryrealV2"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customerid]
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
    
    time: {
      sql: `${CUBE}."TIME"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
