cube(`TotalsmspurchasedQueueMv`, {
  sql: `SELECT * FROM test.totalsmspurchased_queue_mv`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [merchantid]
    },
    
    amount: {
      sql: `amount`,
      type: `sum`
    }
  },
  
  dimensions: {
    merchantid: {
      sql: `${CUBE}."merchantId"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
