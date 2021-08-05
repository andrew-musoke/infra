cube(`SmsbalanceRealQueue`, {
  sql: `SELECT * FROM test.smsbalance_real_queue`,
  
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
    },
    
    totalbalance: {
      sql: `${CUBE}."TOTALBALANCE"`,
      type: `sum`
    }
  },
  
  dimensions: {
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
