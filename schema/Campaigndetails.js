cube(`Campaigndetails`, {
  sql: `SELECT * FROM smsdomain.campaigndetails`,
  
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
    
    campaignid: {
      sql: `${CUBE}."CAMPAIGNID"`,
      type: `string`
    },
    
    campaignname: {
      sql: `${CUBE}."CAMPAIGNNAME"`,
      type: `string`
    },
  
    numberofrecipients: {
      sql: `${CUBE}."TOTALRECIPIENTS"`,
      type: `number`
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
