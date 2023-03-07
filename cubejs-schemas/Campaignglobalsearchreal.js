// DESCRIPTION
// This schema used to model raw campaign-global search data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 18. Global Search Feature - uses saved campaigns & campaign report to create a campaign global search feature on BaseSMS


cube(`Campaignglobalsearchreal`, {
    sql: `SELECT * FROM smsdomain.savingcampaignreal`,
    
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
    },
    
    joins: {
        Campaignreportreal: {
          relationship: `belongsTo`,
          sql: `${CUBE}.CAMPAIGNID = ${Campaignreportreal}.CAMPAIGNID`,
        },
        
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

      recipient: {
        sql: `${Campaignreportreal}."RECIPIENT"`,
        type: `string`
      },
      
      timestamp: {
        sql: `${CUBE}."TIMESTAMP"`,
        type: `time`
      }
    },
    
    dataSource: `default`
  });
  