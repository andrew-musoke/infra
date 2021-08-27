cube(`Basesmsactivitiesreal`, {
  sql: `SELECT * FROM test.basesmsactivitiesreal`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      //drillMembers: [customerid, campaignname, cTimestamp, pTimestamp, username]
      drillMembers: [customerid]
    }
  },
  
  dimensions: {
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    },
    
    campaignname: {
      sql: `${CUBE}."CAMPAIGNNAME"`,
      type: `string`
    },

    numberofrecipients: {
      sql: `${CUBE}."NUMBEROFRECIPIENTS"`,
      type: `number`
    },
    
    cTimestamp: {
      sql: `${CUBE}."C_TIMESTAMP"`,
      type: `string`
    },
    
    paymentStatus: {
      sql: `${CUBE}."PAYMENT_STATUS"`,
      type: `string`
    },

    amountPaid: {
      sql: `${CUBE}."AMOUNT_PAID"`,
      type: `number`
    },
    
    pTimestamp: {
      sql: `${CUBE}."P_TIMESTAMP"`,
      type: `string`
    },
    
    username: {
      sql: `${CUBE}."USERNAME"`,
      type: `string`
    },
    
    eventtype: {
      sql: `${CUBE}."EVENTTYPE"`,
      type: `string`
    },
    
    eventtime: {
      sql: `${CUBE}."EVENTTIME"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
