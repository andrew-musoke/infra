// DESCRIPTION
// This schema used to model raw authorization events data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 5: Campaign Report - contains information about the campaign (i.e. all the recipients, status, telco, etc) 


cube(`Campaignreportreal`, {
  sql: `SELECT * FROM smsdomain.campaignreportreal`,

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
      type: `string`,
      primaryKey: true,
      shown: true
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
    
    smssent: {
      sql: `${CUBE}."SMSSENT"`,
      type: `number`
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
