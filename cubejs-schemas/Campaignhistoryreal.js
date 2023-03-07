// DESCRIPTION
// This schema used to model raw campaign-history data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 2: SMS Campaign History - containing a detailed description and analytics of the campaign sent


cube(`Campaignhistoryreal`, {
  sql: `SELECT * FROM smsdomain.Campaignhistoryreal`,

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

    numberofrecipients: {
      sql: `${CUBE}."NUMBEROFRECIPIENTS"`,
      type: `number`
    },
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
