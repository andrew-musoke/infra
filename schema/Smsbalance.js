cube(`Smsbalance`, {
  sql: `SELECT * FROM test.smsbalance`,
  
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

    balance: {
      sql: `${CUBE}."TOTALBALANCE"`,
      type: `number`
    },
    
    transactionid: {
      sql: `${CUBE}."TRANSACTIONID"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
