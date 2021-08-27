cube(`Smsbalance4Real`, {
  sql: `SELECT * FROM test.smsbalance4_real`,
  

  refreshKey: {
    every: `1 second`,
  },
  
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

    balance: {
      sql: `${CUBE}."SMSBALANCECURRENT"`,
      type: `number`
    },

    countcustomerids: {
      sql: `${CUBE}."COUNTCUSTOMERID"`,
      type: `number`
    }
  },
  
  dataSource: `default`
});
