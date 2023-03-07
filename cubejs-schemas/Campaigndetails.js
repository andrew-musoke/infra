// DESCRIPTION
// This schema used to model raw campaign-history data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 2: SMS Campaign History - containing a detailed description and analytics of the campaign sent
// Number 9: Total Campaigns - contains a total number of campaigns launched per customer


cube(`Campaigndetails`, {
    sql: `SELECT * FROM smsdomain.campaigndetails`,

    refreshKey: {
        every: `1 second`,
      },
    
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
    },
    
    
    joins: {
      // joining with Savedcampaign to get the list of recipients & campaign message for each campaignid
      Savingcampaignreal: {
        relationship: `hasOne`,
        sql: `${CUBE}.CAMPAIGNID = ${Savingcampaignreal}.CAMPAIGNID`,
      },

      // joining with Campaign report to get individual phonenumbers for global search feature
      Campaignreportreal: {
        relationship: `belongsTo`,
        sql: `${CUBE}.CAMPAIGNID = ${Campaignreportreal}.CAMPAIGNID`,
      }
    },
    
    measures: {
      count: {
        sql:`CAMPAIGNID`,
        type: `countDistinct`,
        //drillMembers: [customerid, campaignid, campaignname, timestamp]
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
        sql: `${Savingcampaignreal}."MESSAGE"`,
        type: `string`
      },
    
      numberofrecipients: {
        sql: `${CUBE}."TOTALRECIPIENTS"`,
        type: `number`
      },

      //array of recipients from SavingcampaignDev schema
      recipients: {
        sql: `${Savingcampaignreal}."RECIPIENTS"`,
        type: `string`
      },

      //individual phonenumbers/recipients from Campaign report schema
      recipient: {
        sql: `${Campaignreportreal}."RECIPIENT"`,
        type: `string`
      },
  
      mtnNumbers: {
        sql: `${CUBE}."MTNSUCCESS"`,
        type: `number`
      },
  
      airtelNumbers: {
        sql: `${CUBE}."AIRTELSUCCESS"`,
        type: `number`
      },
  
      totalSuccessStatus: {
        sql: `${CUBE}."TOTAL_SUCCESS_STATUS"`,
        type: `number`
      },
  
      totalFailedStatus: {
        sql: `${CUBE}."TOTAL_FAILED_STATUS"`,
        type: `number`
      },
  
      deliveryrate: {
        sql: `${CUBE}."DELIVERYRATE"`,
        type: `number`
      },
      
      status: {
        sql: `${CUBE}."STATUS"`,
        type: `string`
      },
      
      timestamp: {
        sql: `${CUBE}."TIMESTAMP"`,
        type: `time`
      }
    },
    
    dataSource: `default`
  });
  