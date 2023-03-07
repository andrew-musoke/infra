// DESCRIPTION
// This schema used to model raw campaign-history-report data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 5: Campaign Report - contains information about the campaign (i.e. all the recipients, status, telco, etc) 
// Number 16: Campaign History Report - uses campaign report schemas to generate reports on BaseSMS

cube(`Campaignhistoryreportreal`, {
    sql: `SELECT MERCHANTID, CAMPAIGNID,
          CASE WHEN STATUS='success' THEN COUNT(STATUS) ELSE 0 END AS SMSSENT_SUCCESSFULLY,
          CASE WHEN STATUS='failed' THEN COUNT(STATUS) ELSE 0 END AS SMSFAILED,
          CAMPAIGN_LAUNCH_TIME
          FROM smsdomain.campaignreportreal
          GROUP BY MERCHANTID, CAMPAIGNID, STATUS, CAMPAIGN_LAUNCH_TIME`,
    
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
    },
    
    joins: {
      
    },
    
    measures: {
      totalCampaignsSent: {
        sql:`CAMPAIGNID`,
        type: `countDistinct`,
      },

      totalSmsSent: {
        sql:`SMSSENT_SUCCESSFULLY`,
        type: `sum`,
      },

      totalSmsFailed: {
        sql:`SMSFAILED`,
        type: `sum`,
      },

      totalSmsToBeSent: {
        sql:`SMSSENT`,
        type: `sum`,
      },
    },
    
    dimensions: {
      customerid: {
        sql: `${CUBE}."MERCHANTID"`,
        type: `string`
      },
      
      timestamp: {
        sql: `${CUBE}."CAMPAIGN_LAUNCH_TIME"`,
        type: `time`
      },
      
    },
    
    dataSource: `default`
  });
  