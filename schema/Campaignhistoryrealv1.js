cube(`Campaignhistoryrealv1`, {
  sql: `SELECT * FROM smsdomain.campaignhistoryrealv1`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customerid, campaignname]
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
    
    time: {
      sql: `${CUBE}."TIME"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
