cube(`DubaivisatotalrequestsDev`, {
  sql: `SELECT * FROM dubaivisadomain_dev.dubaivisatotalrequests_dev`,
  
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
    
    requests: {
      sql: `${CUBE}."TOTALVISAREQUESTS"`,
      type: `number`
    },

    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
