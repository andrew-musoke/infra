// DESCRIPTION
// This schema used to model raw campaign-history data from the database into total campaigns sent & total sms sent per time.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 10: Campaign Trends - contains information about total campaigns sent & total sms sent per time

cube(`Campaigntrendsreal`, {

  // this is the sql query to get total campaigns sent & total sms sent per time
    sql: `SELECT  MERCHANTID, COUNT(DISTINCT CAMPAIGNID) AS TOTALCAMPAIGNSSENT, SUM(SMSSENT) AS TOTALSMSSENT, CAMPAIGN_LAUNCH_TIME
          FROM smsdomain.campaignreportreal
          GROUP BY MERCHANTID, CAMPAIGN_LAUNCH_TIME`,
  
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
        drillMembers: [customerid, timestamp]
      }
    },
    
    dimensions: {
      customerid: {
        sql: `${CUBE}."MERCHANTID"`,
        type: `string`
      },
      
      totalCampaignsSent: {
        sql: `${CUBE}."TOTALCAMPAIGNSSENT"`,
        type: `number`
      },

      totalSmsSent: {
        sql: `${CUBE}."TOTALSMSSENT"`,
        type: `number`
      },
  
      timestamp: {
        sql: `${CUBE}."CAMPAIGN_LAUNCH_TIME"`,
        type: `time`
      }
    },
  
    
    dataSource: `default`
  });
  