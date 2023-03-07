// DESCRIPTION
// This schema used to model raw campaign-history data from the database into total campaigns sent per customer.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 9: Total Campaigns - contains a total number of campaigns launched per customer

cube(`Totalcampaignsreal`, {

  // this is the sql query to get total campaigns sent for each customer
    sql: `SELECT CUSTOMERID, COUNT(CAMPAIGNID) AS TOTALCAMPAIGNSSENT
          FROM smsdomain.campaigndetails
          GROUP BY CUSTOMERID`,
  
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
        drillMembers: [customerid]
      }
    },
    
    dimensions: {
      customerid: {
        sql: `${CUBE}."CUSTOMERID"`,
        type: `string`
      },
    
      totalCampaignsSent: {
        sql: `${CUBE}."TOTALCAMPAIGNSSENT"`,
        type: `number`
      }
      
    },
  
    
    dataSource: `default`
  });
  