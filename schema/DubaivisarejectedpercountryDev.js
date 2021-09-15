cube(`DubaivisarejectedpercountryDev`, {
  sql: `SELECT * FROM dubaivisadomain_dev.dubaivisarejectedpercountry_dev`,
  
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
    status: {
      sql: `${CUBE}."APPLICATION_STATUS"`,
      type: `string`
    },
    
    country: {
      sql: `${CUBE}."NATIONALITY"`,
      type: `string`
    }, 

    applicants: {
      sql: `${CUBE}."COUNT_NATIONALITY"`,
      type: `number`
    }, 
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
