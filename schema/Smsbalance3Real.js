cube(`Smsbalance3Real`, {
  sql: `SELECT * FROM test.smsbalance3_real`,
  
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
