cube(`SalespertimeV2QueueMv`, {
  sql: `SELECT * FROM test."salespertimeV2_queue_mv"`,
  
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
    
    totalamount: {
      sql: `${CUBE}."TOTALAMOUNT"`,
      type: `sum`
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
    
    time: {
      sql: `${CUBE}."TIME"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
