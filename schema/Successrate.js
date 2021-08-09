cube(`Successrate`, {
  sql: `SELECT * FROM test.successrate`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [trackid]
    }
  },
  
  dimensions: {
    trackid: {
      sql: `${CUBE}."TRACKID"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});