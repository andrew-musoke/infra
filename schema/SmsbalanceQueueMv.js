cube(`SmsbalanceQueueMv`, {
  sql: `SELECT * FROM test.smsbalance_queue_mv`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customerid, transactionid]
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
    },
    
    transactionid: {
      sql: `${CUBE}."TRANSACTIONID"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
