cube(`PurchaseHistoryQueue`, {
  sql: `SELECT * FROM test."purchaseHistory_queue"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customerid, paidthrough, datetime]
    },
    
    amount: {
      sql: `${CUBE}."AMOUNT"`,
      type: `sum`
    }
  },
  
  dimensions: {
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    },
    
    status: {
      sql: `${CUBE}."STATUS"`,
      type: `string`
    },
    
    phone: {
      sql: `${CUBE}."PHONE"`,
      type: `string`
    },
    
    paidthrough: {
      sql: `${CUBE}."PAIDTHROUGH"`,
      type: `string`
    },
    
    datetime: {
      sql: `${CUBE}."DATETIME"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
