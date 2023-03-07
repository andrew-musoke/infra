// DESCRIPTION
// This schema joins campaigndetails & basesmsuserinfo schemas to create an endpoints with a list of basesms customers & all the unique campaignnames they've ever sent. 

// REQUIREMENT
// -- Number 19: Customerscampaignsinfo - contains customers information (username & email) and the list of all unique campaigns they've ever sent.

cube(`Customerscampaignsinfo`, {
    sql: `SELECT  DISTINCT CAMPAIGNNAME, CUSTOMERID
    FROM smsdomain.campaigndetails`,
  
  
    
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  
    },
    
    joins: {
      Basesmsuserinfo: {
        relationship: `belongsTo`,
        sql: `${CUBE}.CUSTOMERID = ${Basesmsuserinfo}.CUSTOMERID`,
      },
    },
    
    measures: {
      count: {
        type: `count`,
      }
    },
    
    dimensions: {
      customerid: {
        sql: `${CUBE}."CUSTOMERID"`,
        type: `string`,
        primaryKey: true,
        shown: true,
      },
      
      campaignname: {
        sql: `${CUBE}."CAMPAIGNNAME"`,
        type: `string`
      },

      customername: {
        sql: `${Basesmsuserinfo}."CUSTOMERNAME"`,
        type: `string`
      },
      
      email: {
        sql: `${Basesmsuserinfo}."EMAIL"`,
        type: `string`
      }
      
    },
  
    
    dataSource: `default`
  });
  