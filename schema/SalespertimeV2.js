cube(`SalespertimeV2`, {
  sql: `SELECT * FROM test."salespertimeV2"`,
  
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
