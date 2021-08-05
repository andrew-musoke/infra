cube(`LoginsinfraV2QueueMv`, {
  sql: `SELECT * FROM test."loginsinfraV2_queue_mv"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [username]
    }
  },
  
  dimensions: {
    username: {
      sql: `${CUBE}."USERNAME"`,
      type: `string`
    },
    
    eventtype: {
      sql: `${CUBE}."EVENTTYPE"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
