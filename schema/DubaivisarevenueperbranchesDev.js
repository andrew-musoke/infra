cube(`DubaivisarevenueperbranchesDev`, {

  sql: `SELECT * FROM dubaivisadomain_dev.dubaivisarevenueperbranches_dev`,

  
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [branchname, timestamp]
    }
  },
  
  dimensions: {
    branchname: {
      sql: `${CUBE}."BRANCHNAME"`,
      type: `string`
    }, 

    revenue: {
      sql: `${CUBE}."REVENUE"`,
      type: `number`
    },
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
