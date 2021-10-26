cube(`Smsbalancereal`, {
  sql: `SELECT * FROM smsdomain.smsbalancereal`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customerid, timestamp]
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
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
