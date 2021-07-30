cube(`PurchaseHistoryV2Queue`, {
  sql: `SELECT * FROM test."purchaseHistoryV2_queue"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customerid, paidthrough, timestamp]
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
    
    phonenumber: {
      sql: `${CUBE}."PHONENUMBER"`,
      type: `string`
    },
    
    paidthrough: {
      sql: `${CUBE}."PAIDTHROUGH"`,
      type: `string`
    },
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
