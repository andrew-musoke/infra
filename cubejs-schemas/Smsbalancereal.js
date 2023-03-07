// DESCRIPTION
// This schema used to model raw smsbalance data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 1: SMS balance in client’s wallets

cube(`Smsbalancereal`, {
  sql: `SELECT * FROM smsdomain.smsbalancereal`,

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


