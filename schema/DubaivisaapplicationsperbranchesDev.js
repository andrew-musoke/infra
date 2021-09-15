cube(`DubaivisaapplicationsperbranchesDev`, {
  sql: `SELECT * FROM dubaivisadomain_dev.dubaivisaapplicationsperbranches_dev`,
  
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

    applications: {
      sql: `${CUBE}."COUNT_APPLICATIONS"`,
      type: `number`
    },
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
