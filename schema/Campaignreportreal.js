cube(`Campaignreportreal`, {
  sql: `SELECT * FROM smsdomain.campaignreportreal`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customerid, campaignid, campaignname]
    }
  },
  
  dimensions: {
    customerid: {
      sql: `${CUBE}."MERCHANTID"`,
      type: `string`
    },
    
    campaignid: {
      sql: `${CUBE}."CAMPAIGNID"`,
      type: `string`
    },
    
    campaignname: {
      sql: `${CUBE}."CAMPAIGNNAME"`,
      type: `string`
    },

    totalrecipients: {
      sql: `${CUBE}."NUMBEROFRECIPIENTS"`,
      type: `number`
    },
    
    recipient: {
      sql: `${CUBE}."RECIPIENT"`,
      type: `string`
    },
    
    status: {
      sql: `${CUBE}."STATUS"`,
      type: `string`
    },
    
    failureReason: {
      sql: `${CUBE}."FAILURE_REASON"`,
      type: `string`
    },
    
    telco: {
      sql: `${CUBE}."TELCO"`,
      type: `string`
    },
    
    campaignLaunchTime: {
      sql: `${CUBE}."CAMPAIGN_LAUNCH_TIME"`,
      type: `time`
    },
    
    timeSent: {
      sql: `${CUBE}."TIME_SENT"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
