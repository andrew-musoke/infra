cube(`DubaivisatotalrevenueDev`, {
  sql: `SELECT * FROM dubaivisadomain_dev.dubaivisatotalrevenue_dev`,
 
  
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

    revenue: {
      sql: `${CUBE}."TOTALREVENUE"`,
      type: `number`
    },


    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
