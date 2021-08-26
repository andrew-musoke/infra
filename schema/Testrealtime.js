cube(`Testrealtime`, {
  sql: `SELECT * FROM test.testrealtime`,

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
      drillMembers: [id, name]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
      shown:true
    },

    name: {
      sql: `name`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
