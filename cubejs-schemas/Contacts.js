// DESCRIPTION
// This schema used to model raw authorization events data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 12: Importing Contacts - contains a list of contacts to be imported when a user launch a campaign, contacts are extracted from the campaigns sent

cube(`Contacts`, {
    sql: `SELECT MERCHANTID AS CUSTOMERID, RECIPIENT, COUNT(MERCHANTID) AS COUNTCUSTOMERS
          FROM smsdomain.campaignreportreal
          GROUP BY MERCHANTID, RECIPIENT `,
    
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
    },
    
    joins: {
      
    },
    
    measures: {
      count: {
        type: `count`,
        //drillMembers: [merchantid]
      }
    },
    
    dimensions: {
      customerid: {
        sql: `${CUBE}."CUSTOMERID"`,
        type: `string`
      },
      
      
      recipient: {
        sql: `${CUBE}."RECIPIENT"`,
        type: `string`
      },
      
      countcustomers: {
        sql: `${CUBE}."COUNTCUSTOMERS"`,
        type: `number`
      }

    },
    
    dataSource: `default`
  });
  