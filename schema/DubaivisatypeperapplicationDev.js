cube(`DubaivisatypeperapplicationDev`, {
  sql: `SELECT * FROM dubaivisadomain_dev.dubaivisatypeperapplication_dev`,
  
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
    }
  },
  
  dimensions: {
    visatype: {
      sql: `${CUBE}."VISATYPE"`,
      type: `string`
    },

    applicants: {
      sql: `${CUBE}."COUNT_VISATYPE"`,
      type: `number`
    }
  },
  
  dataSource: `default`
});
