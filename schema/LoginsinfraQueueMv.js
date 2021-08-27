cube(`LoginsinfraQueueMv`, {
  sql: `SELECT * FROM test.loginsinfra_queue_mv`,
  
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
    
    logincount: {
      sql: `${CUBE}."LOGINCOUNT"`,
      type: `sum`
    }
  },
  
  dimensions: {
    users: {
      sql: `${CUBE}."USERS"`,
      type: `string`
    },
    
    event: {
      sql: `${CUBE}."EVENT"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
