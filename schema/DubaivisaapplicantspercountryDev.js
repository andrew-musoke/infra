cube(`DubaivisaapplicantspercountryDev`, {
  sql: `SELECT * FROM dubaivisadomain_dev.dubaivisaapplicantspercountry_dev`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [country, timestamp]
    }
  },
  
  dimensions: {
    country: {
      sql: `${CUBE}."COUNTRY"`,
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
