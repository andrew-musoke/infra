cube(`Smspertelco1`, {
  sql: `SELECT * FROM test.smspertelco1`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },
    
    countphonenumber: {
      sql: `${CUBE}."COUNTPHONENUMBER"`,
      type: `sum`
    }
  },
  
  dimensions: {
    phone: {
      sql: `${CUBE}."PHONE"`,
      type: `string`
    },
    
    telcocompany: {
      sql: `${CUBE}."TELCOCOMPANY"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
