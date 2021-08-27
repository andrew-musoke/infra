cube(`CampaignDetails`, {
  sql: `SELECT * FROM test."campaignDetails"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customerid, campaignid]
    }
  },
  
  dimensions: {
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    },
    
    campaignid: {
      sql: `${CUBE}."CAMPAIGNID"`,
      type: `string`
    },
    
    status: {
      sql: `${CUBE}."STATUS"`,
      type: `string`
    },
    
    telco: {
      sql: `${CUBE}."TELCO"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
