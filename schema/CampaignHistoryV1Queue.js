cube(`CampaignHistoryV1Queue`, {
  sql: `SELECT * FROM test."campaignHistoryV1_queue"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customerid, campaignname, timestamp]
    }
  },
  
  dimensions: {
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    },
    
    campaignname: {
      sql: `${CUBE}."CAMPAIGNNAME"`,
      type: `string`
    },
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
