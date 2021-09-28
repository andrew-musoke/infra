cube(`Smsbalancerealv1`, {
  sql: `SELECT * FROM smsdomain.smsbalancerealv1`,
  
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
    
    smsBalance: {
      sql: `${CUBE}."SMS_BALANCE"`,
      type: `sum`
    }
  },
  
  dimensions: {
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    },

    balance: {
      sql: `${CUBE}."SMS_BALANCE"`,
      type: `number`
    },

    countcustomerids: {
      sql: `${CUBE}."COUNTCUSTOMERID"`,
      type: `number`
    }
  },
  
  dataSource: `default`
});
