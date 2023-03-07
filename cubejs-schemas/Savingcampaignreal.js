// DESCRIPTION
// This schema used to model raw saved-campaigns data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 6: Saved Campaigns - contains details about a campaigns sent and number of recipients.

cube(`Savingcampaignreal`, {
  sql: `SELECT * FROM smsdomain.savingcampaignreal`,

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
      drillMembers: [customerid, campaignid, campaignname, timestamp]
    }
  },
  
  dimensions: {
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    },
    
    //adding primary key in the campaignid as the joining key
    campaignid: {
      sql: `${CUBE}."CAMPAIGNID"`,
      type: `string`,
      primaryKey: true,
      shown: true,
    },
    
    campaignname: {
      sql: `${CUBE}."CAMPAIGNNAME"`,
      type: `string`
    },
    
    message: {
      sql: `${CUBE}."MESSAGE"`,
      type: `string`
    },

    numberofrecipients: {
      sql: `${CUBE}."NUMBEROFRECIPIENTS"`,
      type: `number`
    },
    
    recipients: {
      sql: `${CUBE}."RECIPIENTS"`,
      type: `string`
    },
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
