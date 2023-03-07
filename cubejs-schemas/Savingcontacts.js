// DESCRIPTION
// This schema used to model raw saved-contacts data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 7: Saved Contacts - contains individual and groups/list of contacts saved

cube(`Savingcontacts`, {
  sql: `SELECT * FROM smsdomain.savingcontacts`,

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
      drillMembers: [customerid, name, timestamp]
    }
  },
  
  dimensions: {
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    phoneNumber: {
      sql: `${CUBE}."PHONENUMBER"`,
      type: `string`
    },
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
