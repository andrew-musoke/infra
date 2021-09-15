cube(`DubaivisaapprovedrequestsDev`, {
  sql: `SELECT * FROM dubaivisadomain_dev.dubaivisaapprovedrequests_dev`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [timestamp]
    }
  },
  
  dimensions: {
    applicationstatus: {
      sql: `${CUBE}."APPLICATIONSTATUS"`,
      type: `string`
    },
    
    totalApproved: {
      sql: `${CUBE}."APPROVED_APPLICATIONS"`,
      type: `number`
    },

    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
